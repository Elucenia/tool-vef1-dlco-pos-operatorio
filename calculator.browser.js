/* ELUCENIA standalone integration. Source package metadata and rights: README.md. */
(function(root){'use strict';
function freeze(value){if(value&&typeof value==='object'){for(const item of Object.values(value))freeze(item);Object.freeze(value);}return value;}
const TOOL=freeze({"id":"vef1-dlco-pos-operatorio","title":"VEF₁ e DLCO previstos pós-operatórios","fields":[["mode","Método de estimativa","sel",{"opt":true,"defaultValue":"segmental","opts":{"segmental":"Contagem de segmentos funcionantes","perfusion":"Perfusão pulmonar medida"}}],["vef1","VEF₁ pré-operatório (pós-broncodilatador)","num",{"min":10,"max":150,"unit":"% do previsto","ph":"75"}],["dlco","DLCO pré-operatória","num",{"min":10,"max":150,"unit":"% do previsto","ph":"70","opt":true}],["seg","Segmentos <strong>funcionantes</strong> que serão ressecados","num",{"min":1,"max":19,"ph":"5","integer":true,"step":1,"opt":true}],["obs","Segmentos obstruídos (não funcionantes) no pulmão todo","num",{"min":0,"max":18,"ph":"0","opt":true,"integer":true,"step":1}],["perfusao","Perfusão do pulmão a ressecar","num",{"min":0,"max":100,"unit":"% da perfusão total","ph":"50","opt":true}]],"config":null,"reviewStatus":"needs-review","clinicalValidation":"not-performed"});
const window={};
/* ELUCENIA arithmetic registry. No DOM access, storage, telemetry or network requests. */
(function(root){
  'use strict';
  const CALC={fn:Object.create(null)};
  const round=(n,d=1)=>Math.round(n*Math.pow(10,d))/Math.pow(10,d);
  const yes=v=>v===true||v==='1'||v===1;
  CALC.h={
    r1:round,
    br:(n,d=1)=>round(n,d).toLocaleString('pt-BR',{minimumFractionDigits:d,maximumFractionDigits:d}),
    band:(n,bands)=>{for(const b of bands)if(n<b[0])return b[1];return bands[bands.length-1][1];},
    sum:(values,weights)=>Object.entries(weights).reduce((n,[key,w])=>n+(yes(values[key])?w:0),0),yes
  };
  CALC.def=(id,fn)=>{if(CALC.fn[id])throw Error('Duplicate calculator '+id);CALC.fn[id]=fn;};
  CALC.score=(cfg,values)=>{
    let score=0;
    for(const[name,type,weight]of cfg.fields){const v=values[name];if(type==='chk'){if(yes(v))score+=weight;}else if(type==='radio'||type==='sel'){const n=parseFloat(v);if(!Number.isNaN(n))score+=n;}}
    score=round(score,2);let band=cfg.bands[0];for(const b of cfg.bands)if(score>=b[0])band=b;
    return{main:[String(score).replace('.',','),cfg.unit||(Math.abs(score)===1?'ponto':'pontos')],label:cfg.label,level:band[1],verdict:band[2],note:band[3]||'',raw:{score}};
  };
  CALC.run=(id,values,cfg)=>{if(cfg&&cfg.bands)return CALC.score(cfg,values);if(!CALC.fn[id])return{error:'Calculadora indisponível.'};return CALC.fn[id](values);};
  root.CALC=CALC;if(typeof module!=='undefined')module.exports=CALC;
})(typeof window!=='undefined'?window:globalThis);

(function(a){'use strict';
function ppoExactFraction(value){
 const match=String(value).match(/^([+-]?)(\d+)(?:\.(\d*))?(?:e([+-]?\d+))?$/i);if(!match)throw Error('Invalid PPO canonical decimal');
 const places=(match[3]||'').length-Number(match[4]||0);let numerator=BigInt((match[1]==='-'?'-':'')+match[2]+(match[3]||'')),denominator=1n;
 if(places>=0)denominator=10n**BigInt(places);else numerator*=10n**BigInt(-places);return[numerator,denominator];
}
function ppoRationalToNearestBinary64(pair){
 let numerator=pair[0],denominator=pair[1];if(denominator<=0n)throw Error('Positive rational denominator required');if(numerator===0n)return 0;
 const sign=numerator<0n?-1:1;if(numerator<0n)numerator=-numerator;
 const nearestQuotient=(n,d)=>{const q=n/d,r=n%d;return 2n*r>d||(2n*r===d&&(q&1n)===1n)?q+1n:q;};
 let exponent=numerator.toString(2).length-denominator.toString(2).length;
 if(exponent>=0?numerator<(denominator<<BigInt(exponent)):(numerator<<BigInt(-exponent))<denominator)exponent--;
 if(exponent<-1022){const significant=nearestQuotient(numerator<<1074n,denominator);return sign*Number(significant)*Number.MIN_VALUE;}
 const shift=52-exponent,significant=shift>=0?nearestQuotient(numerator<<BigInt(shift),denominator):nearestQuotient(numerator,denominator<<BigInt(-shift));
 if(significant===(1n<<53n))return sign*Math.pow(2,exponent+1);
 return sign*Number(significant)*Math.pow(2,exponent-52);
}
function ppoExactOutput(value,remaining,functional){const pair=ppoExactFraction(value);return ppoRationalToNearestBinary64([pair[0]*BigInt(remaining),pair[1]*BigInt(functional)]);}
function ppoExactWhole(value,remaining,functional){const pair=ppoExactFraction(value),n=pair[0]*BigInt(remaining),d=pair[1]*BigInt(functional),q=n/d,r=n%d;return String(q+(2n*r>=d?1n:0n));}
function ppoExactCompare(value,remaining,functional,threshold){const pair=ppoExactFraction(value);const delta=pair[0]*BigInt(remaining)-BigInt(threshold)*pair[1]*BigInt(functional);return delta<0n?-1:delta>0n?1:0;}
var e=a.h;
var o=e.br;
var n=function(a,e){return o(a,null==e?1:e)+"%"};
a.def("vef1-dlco-pos-operatorio",function(a){
 var perfusion=a.mode==='perfusion',i,remaining,functional,e,r,p;
 if(perfusion){
  if(a.perfusao==null||a.perfusao==='')return{error:"Informe a perfusão medida do pulmão a ressecar."};
  p=+a.perfusao;if(!Number.isFinite(p)||p<0||p>100)return{error:"A perfusão deve estar entre 0 e 100%."};
  i=1-p/100;var pair=ppoExactFraction(p);remaining=100n*pair[1]-pair[0];functional=100n*pair[1];
 }else{
  if(a.seg==null||a.seg==='')return{error:"Informe a contagem de segmentos funcionantes a ressecar."};
  e=19-(a.obs||0);r=+a.seg;if(!Number.isInteger(r)||!Number.isInteger(Number(a.obs||0)))return{error:"As contagens de segmentos a ressecar e obstruídos devem ser números inteiros."};
  if(r>e)return{error:"Os segmentos a ressecar não podem passar do total de segmentos funcionantes (19 menos os obstruídos)."};
  i=1-r/e;remaining=e-r;functional=e;
 }
 var t=ppoExactOutput(a.vef1,remaining,functional),s=null!=a.dlco?ppoExactOutput(a.dlco,remaining,functional):null,d=null==s?t:Math.min(t,s),l=null==s?["info","Avaliação incompleta: DLCO não informada. O VEF₁ppo isolado não estabelece baixo risco. Se VEF₁ppo <30%, o resumo ACCP 2013 já indica avaliação cardiopulmonar de exercício; a avaliação global permanece incompleta."]:ppoExactCompare(a.vef1,remaining,functional,60)>0&&ppoExactCompare(a.dlco,remaining,functional,60)>0?["low","Baixo risco: cirurgia sem testes adicionais (VEF₁ppo e DLCOppo &gt; 60%)"]:ppoExactCompare(a.vef1,remaining,functional,30)>=0&&ppoExactCompare(a.dlco,remaining,functional,30)>=0?["mid","Risco aumentado: fazer teste de exercício simples (escada ou shuttle walk)"]:["high","Alto risco: fazer teste cardiopulmonar de exercício (VO₂ máx.)"];
 var c=perfusion?[["VEF₁ppo",n(t)],["DLCOppo",null==s?"não informado":n(s)],["Perfusão do pulmão a ressecar",o(p,3)+"%"]]:[["VEF₁ppo",n(t)],["DLCOppo",null==s?"não informado":n(s)],["Fração de função preservada",o(100*i,1)+"% ("+(e-r)+" de "+e+" segmentos)"]];
 var raw={fev:t,dlco:s};if(perfusion)raw.perfusion=p;
 return{main:[ppoExactWhole(null==s?a.vef1:Math.min(Number(a.vef1),Number(a.dlco)),remaining,functional),"%"],label:perfusion?(null==s?"VEF₁ parcial por perfusão: DLCO não informada":"Menor valor PPO por perfusão (VEF₁ ou DLCO)"):(null==s?"VEF₁ parcial: DLCO não informada":"Menor valor previsto pós-operatório (VEF₁ ou DLCO)"),level:l[0],verdict:l[1],rows:c,note:null==s?"A ACCP recomenda medir a DLCO em todos os candidatos a ressecção, mesmo com VEF₁ normal.":"",raw};
});
})(window.CALC);
function calculate(input){
 if(!input||typeof input!=='object'||Array.isArray(input))return {error:'Informe um objeto com os campos da ferramenta.',code:'INVALID_INPUT'};
 const mode=input.mode==null||input.mode===''?'segmental':input.mode;
 if(!['segmental','perfusion'].includes(mode))return{error:'Opção inválida: mode',field:'mode',code:'INVALID_OPTION'};
 const provided=name=>Object.hasOwn(input,name)&&input[name]!=null&&!(typeof input[name]==='string'&&!input[name].trim());
 if(mode==='perfusion'){
  if(!provided('perfusao'))return{error:'Campo obrigatório: perfusao',field:'perfusao',code:'REQUIRED_FIELD'};
  for(const name of ['seg','obs'])if(provided(name))return{error:'Campo inativo para o método escolhido: '+name,field:name,code:'INVALID_INPUT'};
 }else{
  if(!provided('seg'))return{error:'Campo obrigatório: seg',field:'seg',code:'REQUIRED_FIELD'};
  if(provided('perfusao'))return{error:'Campo inativo para o método escolhido: perfusao',field:'perfusao',code:'INVALID_INPUT'};
 }
 const values=Object.create(null);
 for(const[name,,kind,o={}] of TOOL.fields){
  const v=Object.hasOwn(input,name)?input[name]:undefined;
  if(kind==='chk'){if(v!==undefined&&v!==null&&![true,false,1,0,'1','0'].includes(v))return {error:'Campo booleano inválido: '+name,field:name,code:'INVALID_INPUT'};values[name]=v===true||v===1||v==='1';continue;}
  const empty=v==null||(typeof v==='string'&&!v.trim());
  if(empty){if(!o.opt)return {error:'Campo obrigatório: '+name,field:name,code:'REQUIRED_FIELD'};values[name]=kind==='num'?null:'';continue;}
  if(kind==='num'){
   if(!['number','string'].includes(typeof v)||(typeof v==='string'&&!/^[+-]?(?:\d+(?:\.\d*)?|\.\d+)(?:[eE][+-]?\d+)?$/.test(v.trim()))||!Number.isFinite(Number(v)))return {error:'Número inválido: '+name,field:name,code:'INVALID_INPUT'};
   const n=Number(v);if((Number.isFinite(o.min)&&n<o.min)||(Number.isFinite(o.max)&&n>o.max))return {error:'Valor fora do intervalo: '+name,field:name,code:'OUT_OF_RANGE'};
   if(o.integer===true&&!Number.isInteger(n))return {error:"Informe um número inteiro: "+name,field:name,code:"INVALID_INPUT"};
   values[name]=n;
  }else{if(!Object.hasOwn(o.opts||{},String(v)))return {error:'Opção inválida: '+name,field:name,code:'INVALID_OPTION'};values[name]=String(v);}
 }
 try{const r=window.CALC.run(TOOL.id,values,TOOL.config);if(r.error)return {error:String(r.error).replace(/<[^>]*>/g,''),code:'FORMULA_DOMAIN'};
  if(!Array.isArray(r.main)||r.main.some(v=>typeof v==='number'&&!Number.isFinite(v))||/\b(?:NaN|Infinity)\b/.test(String(r.main[0])))return {error:'Resultado não finito ou indisponível.',code:'INVALID_RESULT'};
  return {id:TOOL.id,main:r.main,label:r.label||TOOL.title,raw:r.raw||{},...(typeof r.level==='string'?{level:r.level}:{}),...(typeof r.verdict==='string'?{verdict:r.verdict}:{}),...(Array.isArray(r.rows)?{rows:r.rows}:{}),...(typeof r.note==='string'&&r.note?{note:r.note}:{}),clinicalValidation:'not-performed'};
 }catch{return {error:'Confira os valores e o domínio da fórmula.',code:'FORMULA_DOMAIN'};}
}
const api=Object.freeze({metadata:TOOL,calculate});if(typeof module!=='undefined'&&module.exports)module.exports=api;else root.EluceniaTool=api;
})(typeof globalThis!=='undefined'?globalThis:this);
