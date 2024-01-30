WITH foundation_list AS (
  SELECT *
  FROM (VALUES
        ('0xcafeacdadd29f55ce935492e20f1f982df3fb51d'), -- Deployer
        ('0x8e8d8015a7ffa49c83ee7a8773b0f69380cc6552'), -- Safe Multisig(Community)
        ('0xe30ed74c6633a1b0d34a71c50889f9f0fdb7d68a'), -- Treasury
        ('0x212ea08aade1bad779057fb37aaa4377fc61c071'), -- Vesting(Investors)
        ('0xe38149b58e0d6e811fca93e674ddbae1759d3ad7'), -- Rewarder 2
        ('0xd122b143ad59145d6a1c63793910d4d389111989') -- Rewarder 1 // -- not found Founders+Advisors
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
      CONTRACT_ADDRESS = LOWER('0x25f8087EAD173b73D6e8B84329989A8eEA16CF73')
      AND (FROM_ADDRESS in (SELECT FOUNDATION FROM foundation_list) OR TO_ADDRESS in (SELECT FOUNDATION FROM foundation_list))
      AND NOT (FROM_ADDRESS in (SELECT FOUNDATION FROM foundation_list) AND TO_ADDRESS in (SELECT FOUNDATION FROM foundation_list))
    GROUP BY TIMESTAMP
)
SELECT
  DISTINCT TIMESTAMP AS DATE,
   1000000000  - SUM(daily_balance_change) OVER (
    ORDER BY
      TIMESTAMP
  ) AS CIRCULATING,
  (EXTRACT(EPOCH FROM TIMESTAMP) - 1611219600)/86400 AS DAYS, -- 2021/07/21
  CASE
    WHEN DAYS = 0 THEN  67770833 
    WHEN DAYS BETWEEN 0 AND 366 THEN 67770833 + DAYS * 324652.7778 
    WHEN DAYS BETWEEN 366 AND 732 THEN 185125000 + (DAYS-366) * 734934.7186
    WHEN DAYS BETWEEN 732 AND 1099 THEN 454111107 + (DAYS-732) * 545854.7784 
    WHEN DAYS BETWEEN 1099 AND 1465 THEN 654439811 + (DAYS-1099) * 461660.0893
    WHEN DAYS BETWEEN 1465 AND 1650 THEN 823407403 + (DAYS-1465) * 404210.8778 
    WHEN DAYS BETWEEN 1650 AND 1831 THEN 898186416 + (DAYS-1650) * 44094136
    WHEN DAYS BETWEEN 1831 AND 2016 THEN 942280552 + (DAYS-1831) * 129314.315 
    WHEN DAYS BETWEEN 2016 AND 2047 THEN 966203700 + (DAYS-2016) * 1090203.102
    WHEN DAYS > 2047 THEN 999999996 
  END AS PLANNED
FROM
  daily_transfers
ORDER BY
  TIMESTAMP;