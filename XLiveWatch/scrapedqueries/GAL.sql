WITH foundation_list AS (
  SELECT *
  FROM (VALUES
        ('0x783c330a7a4968a08ce100a16ac27ff2ccfaebdf'), -- Token Tracker
        ('0x8793c0b5edb1fea27b1aac3f6fcbabd31b5a4ee7'), -- Tokenvesting
        ('0x65f2ca02e22e3635fdec45b5360a4bb6832625c2'), -- TokenVesting
        ('0xc8f03241d10ca39a64492587aa443fb5ac660870'), -- TokenVesting
        ('0x0ca389eb320e4ec509dde88310b3c60953721a21'), -- TokenVesting
        ('0xdba0f580521968895cca2b1fded2c5cd6d075882'), -- Growth Backer Round 1
        ('0x0b318030c698fd4875726f2f08714a22b8c5f769'), -- TokenVesting
        ('0x70fabf5238f70b0cea742e51201fbdbbba3dc5e5'), -- CoinList Public Sale
        ('0x177e8892d2cf2d03a39d5889e31f337fc19e6b3c'), -- Foundation
        ('0x085fd94607af25e716dffb17f97290081ba8bfed'), -- Binance Launchpool
        ('0x2fcf52ce469e9514ebe284a613764613b5ab1924'), -- Marketing?
        ('0xf819738fa30c3ff866a6c118dfb3827aa14a0f20'), -- Advisors & Partners?
        ('0x69255ccd577a2725586e51e6992ef4685ef114a7')
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
      CONTRACT_ADDRESS = LOWER('0x5fAa989Af96Af85384b8a938c2EdE4A7378D9875')
      AND (FROM_ADDRESS in (SELECT FOUNDATION FROM foundation_list) OR TO_ADDRESS in (SELECT FOUNDATION FROM foundation_list))
      AND NOT (FROM_ADDRESS in (SELECT FOUNDATION FROM foundation_list) AND TO_ADDRESS in (SELECT FOUNDATION FROM foundation_list))
    GROUP BY TIMESTAMP
)

SELECT
  DISTINCT TIMESTAMP AS DATE,
   200000000  - SUM(daily_balance_change) OVER (
    ORDER BY
      TIMESTAMP
  ) AS CIRCULATING,
  (EXTRACT(EPOCH FROM TIMESTAMP) - 1653955200)/86400 AS DAYS, -- 2022/05/31
  CASE
    WHEN DAYS <= 0 THEN  34328800 
    WHEN DAYS BETWEEN 0 AND 92 THEN 34328800 + DAYS *  138126.09 
    WHEN DAYS BETWEEN 92 AND 366 THEN  47036400 + (DAYS-92) *  139134.31 
    WHEN DAYS BETWEEN 366 AND 1098 THEN  85159200  + (DAYS-366) *  111558.47 
    WHEN DAYS BETWEEN 1098 AND 1464 THEN  166820000  + (DAYS-1098) *  44098.36 
    WHEN DAYS BETWEEN 1464 AND 1830 THEN   182960000  + (DAYS-1464) *  32896.17 
    WHEN DAYS BETWEEN 1830 AND 2197 THEN   195000000  + (DAYS-450) *  13623.98 
    WHEN DAYS > 2197 THEN  200000000
  END AS PLANNED
FROM
  daily_transfers
ORDER BY
  TIMESTAMP;


