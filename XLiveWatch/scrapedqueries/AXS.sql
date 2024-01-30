WITH foundation_list AS (
  SELECT *
  FROM (VALUES
        ('0x73b1714fb3bfaefa12f3707befcba3205f9a1162'), -- Token Swap
        ('0x3f31df519ccd510e919d57a0bfcdedd181967228'), -- MultiSigWallet
        ('0xab4e5b618fb8f1f3503689dfbdf801478ff6c252'), -- MultiSig
        ('0xea8b95c4b07ec651821142910ede29a52170779c') -- MultiSigWallet
      )
  AS foundation(FOUNDATION)
),
  daily_transfers AS (
    SELECT
      DATE(BLOCK_TIMESTAMP) as TIMESTAMP,
      SUM(
        CASE
          WHEN FROM_ADDRESS IN (SELECT FOUNDATION FROM foundation_list) THEN - RAW_AMOUNT/POW(10, 18)
          WHEN TO_ADDRESS IN (SELECT FOUNDATION FROM foundation_list) THEN RAW_AMOUNT/POW(10, 18)
          ELSE 0
        END
      ) AS daily_balance_change
    FROM
      ethereum.core.ez_token_transfers
    WHERE
      CONTRACT_ADDRESS = LOWER('0xbb0e17ef65f82ab018d8edd776e8dd940327b28b')
      AND (FROM_ADDRESS in (SELECT FOUNDATION FROM foundation_list) OR TO_ADDRESS in (SELECT FOUNDATION FROM foundation_list))
      AND NOT (FROM_ADDRESS in (SELECT FOUNDATION FROM foundation_list) AND TO_ADDRESS in (SELECT FOUNDATION FROM foundation_list))
    GROUP BY TIMESTAMP
)

SELECT
  DISTINCT TIMESTAMP AS DATE,
  270000000 - SUM(daily_balance_change) OVER (
    ORDER BY
      TIMESTAMP
  ) AS CIRCULATING,
  (EXTRACT(EPOCH FROM TIMESTAMP) - 1604448000)/86400 AS DAYS, -- 2020/11/04
  CASE
    WHEN DAYS = 0 THEN 59985000
    WHEN DAYS BETWEEN 0 AND 90 THEN 59985000 + DAYS * 52500
    WHEN DAYS BETWEEN 90 AND 180 THEN 64710000 + (DAYS-90) * 193125
    WHEN DAYS BETWEEN 180 AND 270 THEN 82091250 + (DAYS-180) * 76125
    WHEN DAYS BETWEEN 270 AND 360 THEN 88942500 + (DAYS-270) * 287625
    WHEN DAYS BETWEEN 360 AND 450 THEN  114828750 + (DAYS-360) * 76125
    WHEN DAYS BETWEEN 450 AND 540 THEN  121680000 + (DAYS-450) * 280375
    WHEN DAYS BETWEEN 540 AND 630 THEN  146913750 + (DAYS-540) * 54375
    WHEN DAYS BETWEEN 630 AND 720 THEN  151807500 + (DAYS-630) * 243375
    WHEN DAYS BETWEEN 720 AND 810 THEN  173711250 + (DAYS-720) * 54375
    WHEN DAYS BETWEEN 810 AND 900 THEN  178605000 + (DAYS-810) * 213937.5
    WHEN DAYS BETWEEN 900 AND 990 THEN  197859375 + (DAYS-900) * 38062.5
    WHEN DAYS BETWEEN 990 AND 1080 THEN  201285000 + (DAYS-990) * 168062.5
    WHEN DAYS BETWEEN 1080 AND 1170 THEN  216410625 + (DAYS-1080) * 38062.5
    WHEN DAYS BETWEEN 1170 AND 1260 THEN  219836250 + (DAYS-1170) * 164437.5
    WHEN DAYS BETWEEN 1260 AND 1350 THEN  234635625 + (DAYS-1260) * 27187.5
    WHEN DAYS BETWEEN 1350 AND 1440 THEN  237082500 + (DAYS-1350) * 139687.5
    WHEN DAYS BETWEEN 1440 AND 1530 THEN  249654375 + (DAYS-1440) * 27187.5
    WHEN DAYS BETWEEN 1530 AND 1620 THEN  252101250 + (DAYS-1530) * 119125
    WHEN DAYS BETWEEN 1620 AND 1890 THEN  262822500 + (DAYS-1620) * 21750
    WHEN DAYS BETWEEN 1890 AND 1980 THEN  268695000 + (DAYS-1890) * 14500
    WHEN DAYS > 1980 THEN  270000000
  END AS PLANNED
FROM
  daily_transfers
ORDER BY
  TIMESTAMP;
