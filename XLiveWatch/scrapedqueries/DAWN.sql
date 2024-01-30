-- forked from API3_Circulation @ https://flipsidecrypto.xyz/edit/queries/5ef03369-a86c-4690-a2e7-40271372f6ef

   WITH foundation_list AS (
  SELECT *
  FROM (VALUES
('0x617c83aef018eeab896e2eb9951728b9a11eb8cc'), -- Deployer
('0xedae4cfb12ecfcde46853f63aba76d8ea3cf3871') -- Tresury
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
      CONTRACT_ADDRESS = LOWER('0x580c8520dEDA0a441522AEAe0f9F7A5f29629aFa')
      AND     (FROM_ADDRESS in (SELECT FOUNDATION FROM foundation_list) OR TO_ADDRESS in (SELECT FOUNDATION FROM foundation_list))
      AND NOT (FROM_ADDRESS in (SELECT FOUNDATION FROM foundation_list) AND TO_ADDRESS in (SELECT FOUNDATION FROM foundation_list))
      AND NOT TO_ADDRESS = '0x0000000000000000000000000000000000000000'
    GROUP BY
      TIMESTAMP
  )
SELECT
  TIMESTAMP AS DATE,
  93468684 - SUM(daily_balance_change) OVER (
    ORDER BY TIMESTAMP
  ) AS CIRCULATING,
  (EXTRACT(EPOCH FROM TIMESTAMP) - 1587340800)/86400 AS DAYS,
  CASE
    WHEN DAYS BETWEEN 0 AND 457 THEN 93468684
    WHEN DAYS > 457 THEN 76588157
  END AS PLANNED
FROM
  daily_transfers
ORDER BY
  TIMESTAMP; 

 


