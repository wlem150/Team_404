package com.tasteforming.domain;

import java.util.Date;

import lombok.Data;

@Data
public class ReserveVO {
    private int order_No;
    private long res_No;
    private String userId;
    private Date order_Date;
    private Date cancel_Date;
    private int head_Cnt;
    private String res_Name;
    private String hour;
    private boolean confirm;
}
