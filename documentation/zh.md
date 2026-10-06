<!-- ELUCENIA technical documentation · vef1-dlco-pos-operatorio · zh · no clinical/professional/rights approval -->

# 术后预计 FEV₁ 与 DLCO

[条件、来源与许可](https://elucenia.org/zh/tools/vef1-dlco-pos-operatorio)

## 使用方法

在门户中使用工具，或通过本地 HTTP 服务器打开 index.html。选择语言，填写各字段，然后计算。

## 输入与单位

### 估算方法

`mode`

选填

- `segmental` — 功能性肺段计数
- `perfusion` — 实测肺灌注

### 术前 FEV₁（支气管舒张后）

`vef1`

%预计值 · 范围: 10–150

### 术前 DLCO

`dlco`

%预计值 · 选填 · 范围: 10–150

### 拟切除的有功能肺段

`seg`

选填 · 范围: 1–19

### 全肺阻塞（无功能）肺段

`obs`

选填 · 范围: 0–18

### 拟切除肺的灌注

`perfusao`

占总灌注的百分比 · 选填 · 范围: 0–100

## 方法版本

ERS/ESTS 2009，第22页：根据功能性肺段作初始估算，以及利用实测灌注比例计算全肺切除前的预计值；ACCP 2013摘要中的阈值：两项都\>60%、任一项处于30–60%、任一项\<30%；未确认完整临床一致性

## 已记录的公式

肺段计数模式：PPO = 术前值 × (1 − y/z)，其中y是拟切除的功能性肺段数，z = 19减去阻塞肺段数。肺段数必须为整数，且y不能大于z。

灌注模式：PPO = 术前值 × (1 − P/100)，其中P是实测的拟切除肺灌注占总灌注的百分比。该比例不能由肺段数推算。

该公式分别应用于FEV₁和DLCO。没有DLCO时，只能得到部分FEV₁结果，评估仍不完整。临床干预及评估策略的选择需要专业复核。

## 限制与适用人群

用于肺切除候选者功能评估的估算，术前值以预计值的百分比表示。选择与干预相符的方法：肺段计数用于初始估算；全肺切除时，输入拟切除肺的实测灌注。不能根据19个肺段推算灌注。肺段数应输入整数；拟切除数不能超过19减去阻塞肺段数。0–100%的灌注是本实现的数学定义域；0%和100%不能证明符合手术条件。没有DLCO时，只能得到部分FEV₁结果，评估不完整。本批次未核查心血管评估算法、运动试验、2014年更正及ACCP全文。ERS/ESTS 2009来源仅阅读了这一特定页，ACCP 2013来源仅阅读了摘要。未进行临床复核或专业翻译。

## 参考文献

- [Brunelli A et al. Physiologic evaluation of the patient with lung cancer being considered for resectional surgery: diagnosis and management of lung cancer, 3rd ed: American College of Chest Physicians evidence-based clinical practice guidelines. Chest, 2013.](https://doi.org/10.1378/chest.12-2395)

- [Brunelli A et al. ERS/ESTS clinical guidelines on fitness for radical therapy in lung cancer patients (surgery and chemo-radiotherapy). Eur Respir J, 2009.](https://doi.org/10.1183/09031936.00184308)

## 复现技术测试

在此仓库的根目录中运行 node test.cjs，以重复已记录的合成案例。原始输入、预期结果和容差保持不变。技术测试不构成临床验证。

```sh
node test.cjs
```

tool.json 包含来源、版本和审查范围。examples.json 保留合成输入与预期结果；results.json 记录实际得到的结果。

[记录与参考文献](../tool.json) · [JavaScript代码](../calculator.js) · [参考案例](../examples.json) · [results.json](../results.json)

## 审查与使用条件

尚未开展独立临床审查。

此界面为自主编写的翻译，并非官方或认证版本。尚未完成独立临床审查、专业语言审查或工具权利授权。

公式或分类结果。解释、处理及适用性须结合专业评估和所选来源。

## 许可与署名

Apache-2.0 仅适用于 ELUCENIA 代码。工具、出版物、翻译和数据的权利仍归各自权利人所有。请保留 LICENSE 和 NOTICE。

ELUCENIA · Felipe Guedes · Copyright © 2026

## 已记录的结果

以下信息保留该方法对合成示例的输出，不构成独立的临床验证。

### 1

低风险：无需额外检查即可手术（ppo FEV₁ 和 ppo DLCO > 60%）

| 结果详情 | |
| --- | --- |
| ppo FEV₁ | 80.5% |
| ppo DLCO | 76.1% |
| 保留功能的比例 | 89.5%（17 / 19 个肺段） |


### 2

风险增加：进行简单运动试验（爬楼梯或 shuttle walk）

| 结果详情 | |
| --- | --- |
| ppo FEV₁ | 58.9% |
| ppo DLCO | 55.3% |
| 保留功能的比例 | 73.7%（14 / 19 个肺段） |


### 3

高风险：进行心肺运动试验（最大 VO₂）

| 结果详情 | |
| --- | --- |
| ppo FEV₁ | 26.3% |
| ppo DLCO | 28.9% |
| 保留功能的比例 | 52.6%（10 / 19 个肺段） |


### 4

评估不完整：未报告 DLCO。单独的 ppo FEV₁ 不能确定为低风险。若 ppo FEV₁ <30%，ACCP 2013 摘要已提示进行心肺运动试验；总体评估仍不完整。

| 结果详情 | |
| --- | --- |
| ppo FEV₁ | 49.4% |
| ppo DLCO | 未报告 |
| 保留功能的比例 | 70.6%（12 / 17 个肺段） |

ACCP 建议对所有拟行切除的患者测量 DLCO，即使 FEV₁ 正常。

