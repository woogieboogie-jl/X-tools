WITH foundation_list AS (
  SELECT *
  FROM (VALUES
      ('0x2ec1c79e71594373123d7b86d5847eef1ce0a475'),  -- Deployer
      ('0x3f1be79ab382f21c284008df07e3d169867db647'),  -- Lockup 1
      ('0x581e27c21ce60a946f0e866436a025bc89f3fb26'),  -- Lockup 2
      ('0xf2d15c0a89428c9251d71a0e29b39ff1e86bce25'),  -- Airdrop
      ('0x988ace2e421e7221d3a54823e57d106db0e84a88'),  -- Gnosis
      ('0x00a64427d66cca0303e2f761a1310143682663df')   -- Lockup 3
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
      CONTRACT_ADDRESS = LOWER('0x5283d291dbcf85356a21ba090e6db59121208b44')
      AND     (FROM_ADDRESS in (SELECT FOUNDATION FROM foundation_list) OR TO_ADDRESS in (SELECT FOUNDATION FROM foundation_list))
      AND NOT (FROM_ADDRESS in (SELECT FOUNDATION FROM foundation_list) AND TO_ADDRESS in (SELECT FOUNDATION FROM foundation_list))
      
    GROUP BY
      TIMESTAMP
  )
SELECT
  TIMESTAMP AS DATE,
  3000000000 - SUM(daily_balance_change) OVER (
    ORDER BY
      TIMESTAMP
  ) AS CIRCULATING,
  (EXTRACT(EPOCH FROM TIMESTAMP) - 1676332800)/86400 AS DAYS,
  CASE
    WHEN DAYS < 120 THEN 360000000 + DAYS *  1300000
    WHEN DAYS BETWEEN 120 AND 365 THEN 710000000 + (DAYS-120) * 2857143
    WHEN DAYS BETWEEN 365 AND 731 THEN 1410000000 + (DAYS-365) * 2168032.79
    WHEN DAYS BETWEEN 731 AND 1096 THEN 2203500000 + (DAYS-731) * 1450684.93
    WHEN DAYS BETWEEN 1096 AND 1461 THEN  2733000000 + (DAYS-1096) *  731506.85
    WHEN DAYS > 1461 THEN 3000000000
  END AS PLANNED
FROM
  daily_transfers
ORDER BY
  TIMESTAMP;

