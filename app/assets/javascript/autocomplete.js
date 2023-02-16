$(window).resize(function() {
  var inputWidth = $("#sites").width();
});

$(function() {
  var inputWidth = $("#sites").width();
  var availableTags = [
    "ADEL PHARMACY (FA061), 141 LONG CAUSEWAY, ADEL, LS16 8EX",
    "ADEL PHARMACY (FGQ01), 141 LONG CAUSEWAY, ADEL, LS16 8EX",
    "ADVANTAGE PHARMACY (FCW85), WEST POINT BUSINESS PARK, WESTLAND SQUARE, LS11 5SS",
    "AL-SHAFA PHARMACY (FG281), 267 DEWSBURY ROAD, LS11 5HZ",
    "AL-SHAFA PHARMACY (FMA95), UNIT 2&3 HILLSIDE BLDG, BEESTON ROAD, BEESTON, LS11 6AY",
    "AL-SHAFA PHARMACY (FTE47), UNIT 2&3 HILLSIDE BLDG, BEESTON ROAD, BEESTON, LS11 8BB",
    "ALLIANCE PHARMACY (FE397), 10 FINKLE HILL, SHERBURN IN ELMET, LS25 6EA",
    "ALLIANCE PHARMACY (FHC58), 10 FINKLE HILL, SHERBURN IN ELMET, LS25 6EA",
    "ALLIANCE PHARMACY (FMD28), 262-266 HAREHILLS LANE, LS9 7BD",
    "ALLIANCE PHARMACY (FW022), 17-19 MARKET STREET, WETHERBY, LS22 6LQ",
    "ALLIED(MIDDLETON)PHARMACY (FEN25), LINGWELL CROFT SURGERY, 20 SHELLDRAKE DRIVE, LS10 3NB",
    "ARMLEY MOOR PHARMACY (FHC18), 90-91A TOWN STREET, ARMLEY, LS12 3HD",
    "ARMLEY PHARMACY (FRA37), 62 ARMLEY RIDGE ROAD, LS12 3NP",
    "ASDA PHARMACY (FLR39), KILLINGBECK DRIVE, LS14 6UF",
    "ASDA PHARMACY MORLEY (FWF91), HOWLEY PARK ROAD, MORLEY, LS27 0BP",
    "ASDA STORES LTD (FA131), HOLT ROAD, HOLT PARK, LS16 7RY",
    "BASKIND PHARMACY (FLA66), 6 STAINBECK LANE, LS7 3QY",
    "BASKIND PHARMACY (FVL41), RUTLAND LODGE, SCOTT HALL ROAD, LS7 3DR",
    "BEESTON HILL PHARMACY (FAQ06), 134 BEESTON ROAD, BEESTON, LS11 8BB",
    "BELLE ISLE PHARMACY (FHG12), 219 MIDDLETON ROAD, LS10 3HU",
    "BELLE ISLE PHARMACY (FR582), 219 MIDDLETON ROAD, LS10 3HU",
    "BELLE ISLE PHARMACY (FXN81), 219 MIDDLETON ROAD, LS10 3HU",
    "BEN WILSON LTD (FXH99), 7 AUSTHORPE VIEW, WHITKIRK, LS15 8NN",
    "BOOTS OF ILKLEY (FCE76), 37-39 BROOK STREET, ILKLEY, LS29 8AG",
    "BOOTS THE CHEMIST (FF200), UNIT 6,GUISELEY RETAIL PK, PARK ROAD, GUISELEY, LS20 8QH",
    "BOOTS THE CHEMIST LTD (FCR27), UNIT 2, SAVINS MILL WAY, KIRKSTALL VALLEY RET PARK, LS5 3RP",
    "BOOTS THE CHEMISTS LTD (FE048), 33 ARNDALE CENTRE, CROSSGATES, LS15 8ET",
    "BOOTS THE CHEMISTS LTD (FFQ21), 255-257 ROUNDHAY ROAD, LS8 4HS",
    "BOOTS UK LIMITED (FA008), 49-51 THE MERRION CENTRE, LS2 8DB",
    "BOOTS UK LIMITED (FC221), 69-71 COMMERCIAL STREET, ROTHWELL, LS26 0AP",
    "BOOTS UK LIMITED (FE521), 11 CHURCH LANE, PUDSEY, LS28 7LD",
    "BOOTS UK LIMITED (FFP17), CITY STATION CONCOURSE, LS1 4DT",
    "BOOTS UK LIMITED (FGY10), WHITE ROSE CENTRE, LS11 8LL",
    "BOOTS UK LIMITED (FK275), 19 ALBION ARCADE, BOND STREET CENTRE, LS1 5ET",
    "BOOTS UK LIMITED (FK276), 12-14 KIRKGATE MARKET CTR, VICAR LANE, LS1 7JH",
    "BOOTS UK LIMITED (FK382), 35 OTLEY ROAD, LS6 3AA",
    "BOOTS UK LIMITED (FKK20), 1 HORSEFAIR CENTRE, WETHERBY, LS22 6FL",
    "BOOTS UK LIMITED (FKP51), 31-33 BRAMLEY CENTRE, BRAMLEY, LS13 2ET",
    "BOOTS UK LIMITED (FMD07), UNIT 3,COLTON PARK, STILE HILL WAY, LS15 9JB",
    "BOOTS UK LIMITED (FP763), CROWN POINT RETAIL PARK, JUNCTION STREET, LS10 1ET",
    "BOOTS UK LIMITED (FQ500), 5-7 TOWN STREET, LS12 1UG",
    "BOOTS UK LIMITED (FTC55), 28-32 KIRKGATE, OTLEY, LS21 3HJ",
    "BOOTS UK LIMITED (FYX23), 3 WINDSOR COURT, MORLEY, LS27 9BG",
    "BROAD ING PHARMACY (FX402), 26 OTLEY ROAD, GUISELEY, LS20 8AH",
    "BRYAN BLOOM CHEMISTS LTD (FLN50), 54 TONG ROAD, LS12 1LZ",
    "CARDIGAN ROAD PHARMACY (FE459), 136 CARDIGAN ROAD, LS6 1LU",
    "CARDIGAN ROAD PHARMACY (FLN80), 136 CARDIGAN ROAD, LS6 1LU",
    "CARDIGAN ROAD PHARMACY (FPF36), 136 CARDIGAN ROAD, LS6 1LU",
    "CHARLES FOX LTD (FH885), 190 HIGH STREET, BOSTON SPA, LS23 6BT",
    "CHEMIST 247 (FDT62), 54 SUGARMILL, OAKHURST AVENUE, LS11 7HL",
    "CHURCH LANE PHARMACY (FE589), 23 CHURCH LANE, PUDSEY, LS28 7LD",
    "CHURCH LANE PHARMACY (FPW17), 23 CHURCH LANE, PUDSEY, LS28 7LD",
    "COHEN'S CHEMIST (FP585), CHAPELTOWN HEALTH CENTRE, SPENCER PLACE, LS7 4BB",
    "COHEN'S CHEMIST (FVR46), 26 OTLEY ROAD, GUISELEY, LS20 8AH",
    "COHEN'S CHEMIST (FXM58), 6 TINSHILL LANE, LS16 7AP",
    "COHENS CHEMIST (FAC97), 80 OSMONDTHORPE LANE, LS9 9EF",
    "COHENS CHEMIST (FAE93), NEW BUILDING, GREEN LANE, WORTLRY, LS12 1JZ",
    "COHENS CHEMIST (FAN49), STREET LANE PRACTICE, 12 DEVONSHIRE AVENUE, LS8 1AY",
    "COHENS CHEMIST (FC418), SHAFTESBURY MEDICAL CTR., 480 HAREHILLS LANE, LS9 6DE",
    "COHENS CHEMIST (FC822), 54 OATLAND LANE, LS7 1SP",
    "COHENS CHEMIST (FDA67), 396 HARROGATE ROAD, MOORTOWN CORNER, LS17 6PY",
    "COHENS CHEMIST (FEC99), 72 OSMONDTHORPE LANE, LS9 9EF",
    "COHENS CHEMIST (FFR88), 5A SHAFTON LANE, LS11 9LY",
    "COHENS CHEMIST (FH095), HIGHFIELD SURGERY, HOLTDALE APPROACH, LS16 7RX",
    "COHENS CHEMIST (FHK38), PARK EDGE MEDICAL CENTRE, ASKETT DRIVE, LS14 1HX",
    "COHENS CHEMIST (FJ018), GARFORTH MEDICAL CENTRE, CHURCH LANE, GARFORTH, LS25 1HB",
    "COHENS CHEMIST (FM223), IVESON APPROACH, TINSHILL, LS16 6FR",
    "COHENS CHEMIST (FPN53), 225 CHAPELTOWN ROAD, LS7 3DX",
    "COHENS CHEMIST (FPQ06), 190 HIGH STREET, BOSTON SPA, LS23 6BT",
    "COHENS CHEMIST (FPT06), 10 MAIN STREET, GARFORTH, LS25 1EZ",
    "COHENS CHEMIST (FV525), 1 BRIDGE STREET, OTLEY, LS21 1BQ",
    "COHENS CHEMIST (FVG26), 230 YORK ROAD, LS9 9BP",
    "COHENS CHEMIST (FWW72), 125 HAREHILLS ROAD, LS8 5BW",
    "COHENS CHEMIST (FXC56), 399 HAREHILLS LANE, LS9 6AP",
    "COHENS CHEMIST (FXV72), 230 YORK ROAD, LS9 9BP",
    "COHENS CHEMISTS (FHV13), 283-285 TOWN STREET, BRAMLEY, LS13 3JT",
    "COHENS CHEMISTS (FLF43), 368 OAKWOOD LANE, LS8 3LF",
    "COHENS CHEMISTS (FR591), 166 WOODHOUSE LANE, LS2 9HB",
    "COTTINGLEY PHARMACY (FG760), 3 COTTINGLEY VALE, COTTINGLEY, LS11 0JY",
    "COTTINGLEY PHARMACY (FR637), 3 COTTINGLEY VALE, COTTINGLEY, LS11 0JY",
    "CROSSGATES DAY & NIGHT PHARMACY (FK545), 17 AUSTHORPE ROAD, CROSSGATES, LS15 8BA",
    "CUTLER PHARMACY (FF841), 42 AUSTHORPE ROAD, LS15 8DX",
    "CUTLER PHARMACY (FL486), 35 BRAMLEY CENTRE, BRAMLEY, LS13 2ET",
    "DAY LEWIS PHARMACY (FVF52), CROSSLEY STREET SURGERY, CROSSLEY STREET, WETHERBY, LS22 6RT",
    "EAST LEEDS PHARMACY (FR825), 80 OSMONDTHORPE LANE, LS9 9EF",
    "FREEMANS PHARMACY (FLM70), WORTLEY BECK HEALTH CTR, RING ROAD, LOWER WORTLEY, LS12 5SG",
    "GALLAGHER PS LTD (FT086), 7 AUSTHORPE VIEW, WHITKIRK, LS15 8NN",
    "GARNERS PHARMACY LTD (FGT36), 49 COMMERCIAL STREET, ROTHWELL, LS26 0AP",
    "GORDONS CHEMISTS LTD (FGQ67), 49 SELBY ROAD, LS9 0EW",
    "GORDONS CHEMISTS LTD (FJL26), 91 MORESDALE LANE, LS14 6GG",
    "HALTON PHARMACY (FE878), 253 SELBY ROAD, HALTON, LS15 7JR",
    "HALTON PHARMACY (FXW64), 253 SELBY ROAD, HALTON, LS15 7JR",
    "HAREHILLS PHARMACY (FVC48), 365 HAREHILLS LANE, LS9 6AX",
    "HAWKIN WA & SONS LTD (FAH13), 78 OTLEY OLD ROAD, LS16 6LQ",
    "HEADINGLEY PHARMACY (FWG49), ST MICHAELS COURT, 1 SHIRE OAK STREET, LS6 2DP",
    "HEALTHNET HOMECARE LTD (FXG83), UNIT 3, GERALD POINT, PHILLIPA WAY, LS12 6LS",
    "HENCONNER PHARMACY (FAL51), 88 HENCONNER LANE, BRAMLEY, LS13 4LG",
    "HENCONNER PHARMACY (FW476), 203 PUDSEY ROAD, LS13 4JA",
    "HOLBECK PHARMACY (FFN16), 5A SHAFTON LANE, LS11 9LY",
    "HOLBECK PHARMACY (FJG37), 5A SHAFTON LANE, LS11 9LY",
    "HYDE PARK PHARMACY (FH186), 46 WOODSLEY ROAD, LS3 1DT",
    "IMAAN PHARMACY (FW811), 262-266 HAREHILLS LANE, LS9 7BD",
    "KHAN PHARMACY (FWJ72), 168 ROUNDHAY ROAD, LS8 5PL",
    "KING LANE PHARMACY (FW003), 79 KING LANE, LS17 5AX",
    "KNIGHTS CHAPEL ALLERTON PHARMACY (FNP86), 6 STAINBECK LANE, LS7 3QY",
    "KNIGHTS SCOTT HALL PHARMACY (FCL08), RUTLAND LODGE, SCOTT HALL ROAD, LS7 3DR",
    "LEES PHARMACY (FM077), 365 HAREHILLS LANE, LS9 6AX",
    "LIPTROT TL LTD (FAM10), 38-42 TOWN STREET, FARSLEY, LS28 5LD",
    "LIPTROTS FARSLEY LTD (FWW11), 38-42 TOWN STREET, FARSLEY, LS28 5LD",
    "LIVING CARE PHARMACY (FAC00), 3 UPPER ACCOMMODATION RD, LS9 8RZ",
    "LIVING CARE PHARMACY (FJ635), 5-7 EAST PARK ROAD, EAST END PARK, LS9 9JG",
    "LIVING CARE PHARMACY (FMX84), 188 OLD LANE, LS11 8AG",
    "LIVING CARE PHARMACY (FPQ71), 227 DEWSBURY ROAD, LS11 5HZ",
    "LIVING CARE PHARMACY (FQW63), ALWOODLEY MEDICAL CENTRE, SAXON MOUNT, LS17 5DT",
    "LIVING CARE PHARMACY (FXC14), 311 DEWSBURY ROAD, LS11 5LQ",
    "LIVING CARE PHARMACY DELIVERIES (FRX61), UNIT 3 LEODIS COURT, DAVID STREET, LS11 5JJ",
    "LLOYDS PHARMACY (FK994), BROADGATE LANE, LS18 4SE",
    "LLOYDS PHARMACY (FN031), 365 HAREHILLS LANE, LS9 6AX",
    "LLOYDSPHARMACY (FAA31), LITTLE FOUNTAIN STREET, MORLEY, LS27 9EN",
    "LLOYDSPHARMACY (FAF44), 39 HIGH STREET, YEADON, LS19 7SP",
    "LLOYDSPHARMACY (FC413), 62 ARMLEY RIDGE ROAD, LS12 3NP",
    "LLOYDSPHARMACY (FE844), 106 DIXON LANE, LOWER WORTLEY, LS12 4AD",
    "LLOYDSPHARMACY (FEW68), 283-285 TOWN STREET, BRAMLEY, LS13 3JT",
    "LLOYDSPHARMACY (FG308), 14A KIRKSTALL BRDGE S/CTR, BRIDGE ROAD, LS5 3BL",
    "LLOYDSPHARMACY (FGC37), 9 FAIRBURN DRIVE, GARFORTH, LS25 2AR",
    "LLOYDSPHARMACY (FGJ70), 399 HAREHILLS LANE, LS9 6AP",
    "LLOYDSPHARMACY (FHP13), EAST LEEDS HEALTH CENTRE, 78 OSMONDTHORPE LANE, LS9 9EF",
    "LLOYDSPHARMACY (FHQ66), 531 TONG ROAD, LS12 5AT",
    "LLOYDSPHARMACY (FHX66), 69 VESPER ROAD, LS5 3QT",
    "LLOYDSPHARMACY (FJ309), 8 ARNDALE CENTRE, OTLEY ROAD, LS6 2UE",
    "LLOYDSPHARMACY (FJQ45), 166 WOODHOUSE LANE, LS2 9HB",
    "LLOYDSPHARMACY (FKP92), BELLMOUNT CLOSE, BRAMLEY, LS13 2UP",
    "LLOYDSPHARMACY (FLH84), 195-197 BUTCHER HILL, LS16 5BQ",
    "LLOYDSPHARMACY (FNE61), 569-571 MEANWOOD ROAD, LS6 4AY",
    "LLOYDSPHARMACY (FNL04), GRANGE MEDICAL CENTRE, 999 YORK ROAD, LS14 6NX",
    "LLOYDSPHARMACY (FNM96), 368 OAKWOOD LANE, LS8 3LF",
    "LLOYDSPHARMACY (FP102), CHAPELTOWN JOINT SERV CTR, 263 CHAPELTOWN ROAD, LS7 3EX",
    "LLOYDSPHARMACY (FQ464), NORTH LEEDS MED PRAC SITE, 355 HARROGATE RD,MOORTOWN, LS17 6PZ",
    "LLOYDSPHARMACY (FQ490), 2 THE AVENUE, ALWOODLEY, LS17 7BE",
    "LLOYDSPHARMACY (FV681), 230 YORK ROAD, LS9 9BP",
    "LLOYDSPHARMACY (FW043), 125 HAREHILLS ROAD, LS8 5BW",
    "LLOYDSPHARMACY (FW757), 12 DEVONSHIRE AVENUE, LS8 1AY",
    "LLOYDSPHARMACY (FWW07), SHAFTSBURY MEDICAL CTR., 480 HAREHILLS LANE, LS9 6NG",
    "LLOYDSPHARMACY (FXG81), UNIT 2 OATLANDS RETAIL PK, OATLAND DRIVE, LS7 1ST",
    "LLOYDSPHARMACY (FYQ89), 24/26 MAIN STREET, GARFORTH, LS25 1AA",
    "LLOYDSPHARMACY (FYV01), WINDMILL HTH CTR PHARMACY, MILL GREEN VIEW, LS14 5JS",
    "MA MANNING (PHARMACY) LTD (FVN05), 97 LIDGETT LANE, LS8 1QR",
    "MEANWOOD PHARMACY (FQR41), 597 MEANWOOD ROAD, LS6 4AY",
    "MEDICHEM (LEEDS) LTD (FKP07), 42 HARROGATE ROAD, LS7 4LA",
    "MEDICHEM (LEEDS) LTD (FVH26), 4-5 NEWTON PARADE, CHAPELTOWN ROAD, LS7 4JA",
    "MEDICHEM PHARMACY (FJT29), 139 SHADWELL LANE, LS17 8AE",
    "MEDICHEM PHARMACY (FKD25), 6 SLAID HILL COURT, LS17 8TJ",
    "MEDICHEM PHARMACY (FL796), 120 DIB LANE, LS8 3AY",
    "MEDICHEM PHARMACY (FN622), 42 HARROGATE ROAD, LS7 4LA",
    "MEDICHEM PHARMACY (FY688), 4-5 NEWTON PARADE, CHAPELTOWN ROAD, LS7 4JA",
    "METHLEY PHARMACY (FFJ65), PINFOLD LANE, METHLEY, LS26 9AB",
    "MIDWAY PHARMACY (FWD92), 23 MIDDLETON PARK CIRCUS, MIDDLETON, LS10 4LX",
    "MILFORD PHARMACY (FET38), 14 HIGH STREET, SOUTH MILFORD, LS25 5AA",
    "MITCHELL'S CHEMIST (FXR93), 88 NEW ROAD SIDE, HORSFORTH, LS18 4QB",
    "MORLEY PHARMACY (FM381), 2A CORPORATION STREET, MORLEY, LS27 9NB",
    "NASEEM'S CHEMISTS (FRW47), 53A COMMERCIAL STREET, ROTHWELL, LS26 0QD",
    "NATIONAL CO-OPERATIVE CHEMISTS LTD (FD359), 239 ROUNDHAY ROAD, LS8 4HS",
    "NEWTON ROTHWELL LTD (FNC76), 49 COMMERCIAL STREET, ROTHWELL, LS26 0AP",
    "OAKWOOD LANE PHARMACY (FF544), OAKWOOD LANE MEDICAL CTR, AMBERTON TERRACE, LS8 3BZ",
    "OAKWOOD PHARMACY (FRC34), 643 ROUNDHAY ROAD, LS8 4BA",
    "OAKWOOD PHARMACY (FT535), 643 ROUNDHAY ROAD, LS8 4BA",
    "OTLEY PHARMACY (FCQ72), 14A MARKET PLACE, OTLEY, LS21 3AQ",
    "OULTON PHARMACY (FLJ43), 7 QUARRY HILL, OULTON, LS26 8SX",
    "P100 LTD (FM514), RUTLAND LODGE, SCOTT HALL ROAD, LS7 3DR",
    "PHAR - ASSIST (HEALTHCARE) LTD (FJD92), PARK EDGE MEDICAL CENTRE, ASKETT DRIVE, LS14 1HX",
    "PHARMACY2U LTD (FLM49), UNIT 4B, VICTORIA ROAD, LS14 2LA",
    "RAPAPORT D (FG963), 868 YORK ROAD, LS14 6DX",
    "ROUNDHAY PHARMACY (FH882), 239 ROUNDHAY ROAD, LS8 4HS",
    "ROUNDHAY PHARMACY (FJ572), 211 ROUNDHAY ROAD, LS8 4HS",
    "RW PULLAN (FA793), 58 BRUDENELL ROAD, LS6 1EG",
    "SAFFER AE (CHEMISTS) LTD (FKQ36), 203 KIRKSTALL LANE, LS6 3EJ",
    "SAFFER AE (CHEMISTS) LTD (FT645), 275 BURLEY ROAD, LS4 2EL",
    "SAINSBURY'S PHARMACY (FDC80), SELBY ROAD, COLTON, LS15 9JA",
    "SAINSBURY'S PHARMACY (FWM28), WHITE ROSE SHOPPING CTR, LS11 8LS",
    "SAINSBURYS PHARMACY (FRD71), MOOR ALLERTON CENTRE, LS17 5NY",
    "SCHOLL FOOTCARE CENTRE (FWP27), 61 ALBION STREET, LS1 5AA",
    "SEACROFT PHARMACY (FDP37), 868 YORK ROAD, LS14 6DX",
    "SELLES DISP CHEMIST (FY176), 10 FINKLE HILL, SHERBURN IN ELMET, LS25 6EA",
    "SELLES DISPENSING CHEMISTS LTD (FN586), 262-266 HAREHILLS LANE, LS9 7BD",
    "SELLES DISPENSING CHEMISTS LTD (FYN32), 56 HIGH STREET, KIPPAX, LS25 7AB",
    "SHAAN PHARMACY (FWK28), 176 HAREHILLS LANE, LS8 5JP",
    "SHEARD SA LTD (FA498), 2 QUEENSWAY, MORLEY, LS27 9BQ",
    "SHEARD SA LTD (FHM43), 68 QUEEN STREET, MORLEY, LS27 9BP",
    "SHEARD SA LTD (FPH34), SOUTH QUEEN STREET, MORLEY, LS27 9EW",
    "SHIFA PHARMACY (FL049), 225 CHAPELTOWN ROAD, LS7 3DX",
    "SILBERSTEIN DJ LTD (FEA92), 141 STREET LANE, LS8 1AA",
    "SKY PHARMACY (FCK46), 35 HAREHILLS ROAD, LS8 5HR",
    "SKY PHARMACY (FLV97), 35 HAREHILLS ROAD, LS8 5HR",
    "STAR PHARMACY (FW060), 136 CARDIGAN ROAD, LS6 1LU",
    "SUPERDRUG STORES PLC (FDN73), 13 KIRKGATE, LS1 6BY",
    "SUPERDRUG STORES PLC (FJH35), 31-35 THE MERRION CENTRE, LS2 8NG",
    "SWILLINGTON PHARMACY (FQK81), CHURCH LANE, SWILLINGTON, LS26 8DY",
    "TAYCARE MEDICAL LTD (FKG00), UNIT 2, ROYDS CLOSE, LS12 6LL",
    "TESCO INSTORE PHARMACY (FR526), ABERFORD ROAD, GARFORTH, LS25 2DX",
    "TESCO STORES LIMITED (FNG46), 361 ROUNDHAY ROAD, LS8 4BU",
    "TESCO STORES LIMITED (FQ812), UNIT 5 SEACROFT AVENUE, LS14 6JD",
    "THE CO-OPERATIVE PHARMACY (FEY81), 48-50 TOWN STREET, ARMLEY, LS12 3AA",
    "THE CO-OPERATIVE PHARMACY (FMN13), 6 SLAID HILL COURT, LS17 8TJ",
    "THE PUDSEY PHARMACY (FNC69), 46 CHAPELTOWN, PUDSEY, LS28 8BS",
    "THE PUDSEY PHARMACY (FTN61), 46 CHAPLETOWN, PUDSEY, LS28 8BS",
    "TYLEE ANDREW LTD (FK853), 25 HYDE PARK ROAD, LS6 1PY",
    "VANTAGE CHEMIST (FAM54), 261 DEWSBURY ROAD, LS11 5HZ",
    "WATSON A (FJ674), CHAPELTOWN HEALTH CENTRE, SPENCER PLACE, LS7 4BB",
    "WELL ARMLEY - ARMLEY MOOR HC (FA231), STATION ROAD, ARMLEY, LS12 3EY",
    "WELL BRAMLEY - BRAMLEY CENTRE (FMW06), 35 BRAMLEY CENTRE, BRAMLEY, LS13 2ET",
    "WELL BRAMLEY - BROAD LANE (FA545), 540 BROAD LANE, STANNINGLEY, LS28 6PA",
    "WELL BURLEY - BURLEY ROAD (FLC63), 275 BURLEY ROAD, LS4 2EL",
    "WELL CROSS GATES - 42 AUSTHORPE ROAD (FCV29), 42 AUSTHORPE ROAD, LS15 8DX",
    "WELL CROSSGATES MC - STATION ROAD (FFA38), CROSSGATES MEDICAL CENTRE, STATION ROAD, LS15 8BZ",
    "WELL HEADINGLEY - KIRKSTALL LANE (FHX11), 203 KIRKSTALL LANE, LS6 3EJ",
    "WELL HORSFORTH - TOWN STREET (FY647), 74 TOWN STREET, HORSFORTH, LS18 4AP",
    "WELL HUNSLET - PENNY HILL CENTRE (FJK17), 17-18 PENNY HILL CENTRE, HUNSLET, LS10 2AP",
    "WELL LEEDS - DIB LANE (FCV08), 120 DIB LANE, LS8 3AY",
    "WELL LEEDS - LINCOLN GREEN ROAD (FNA71), 84-86 LINCOLN GREEN ROAD, LS9 7SU",
    "WELL MORLEY - QUEEN STREET (FVT30), 68 QUEEN STREET, MORLEY, LS27 9BP",
    "WELL MORLEY - QUEENSWAY (FV095), 2 QUEENSWAY, MORLEY, LS27 9BQ",
    "WELL MORLEY - SOUTH QUEEN STREET (FXN63), SOUTH QUEEN STREET, MORLEY, LS27 9EW",
    "WELL ROUNDHAY - STREET LANE (FGV38), 141 STREET LANE, LS8 1AA",
    "WELL SHADWELL - SHADWELL LANE (FRN28), 139 SHADWELL LANE, LS17 8AE",
    "WELL YEADON - HIGH STREET (FF386), 29 HIGH STREET, YEADON, LS19 7SP",
    "WHINMOOR PHARMACY (FCV80), 46A WHITE LAITHE APPROACH, WHINMOOR, LS14 2EH",
    "WRIGHTS CHEMISTS LTD (FW766), 6 TINSHILL LANE, LS16 7AP",
    "YORKSHIRE PHARMACY GROUP (FMK61), 141 LONG CAUSEWAY, ADEL, LS16 8EX",
    "YOUR LOCAL BOOTS PHARMACY (FAM02), HIGHFIELD SURGERY, HOLTDALE APPROACH, LS16 7RX",
    "YOUR LOCAL BOOTS PHARMACY (FC541), 5 HOLLIN PARK PARADE, LS8 3AS",
    "YOUR LOCAL BOOTS PHARMACY (FJ264), 56 HIGH STREET, KIPPAX, LS25 7AB",
    "YOUR LOCAL BOOTS PHARMACY (FKH81), 204 SELBY ROAD, HALTON, LS15 0LF",
    "YOUR LOCAL BOOTS PHARMACY (FKJ95), OULTON MEDICAL CENTRE, QUARRY HILL, OULTON, LS26 8SZ",
    "YOUR LOCAL BOOTS PHARMACY (FKM53), 49 SELBY ROAD, LS9 0EW",
    "YOUR LOCAL BOOTS PHARMACY (FLE94), 91 MORESDALE LANE, LS14 6GG",
    "YOUR LOCAL BOOTS PHARMACY (FMR56), MIDDLETON PARK PHARMACY, 8 MIDDLETON PARK CIRCUS, LS10 4LU",
    "YOUR LOCAL BOOTS PHARMACY (FNW16), 1 MOSELEY PLACE, LS6 2RY",
    "YOUR LOCAL BOOTS PHARMACY (FPW64), 11 NEW ROAD SIDE, RAWDON, LS19 6DD",
    "YOUR LOCAL BOOTS PHARMACY (FPX61), 132 BEESTON ROAD, LS11 8BB",
    "YOUR LOCAL BOOTS PHARMACY (FQJ56), 72 GALLOWAY LANE, PUDSEY, LS28 8LE",
    "YOUR LOCAL BOOTS PHARMACY (FT545), 1 MOOR ROAD, HUNSLET CARR, LS10 2JJ",
    "YOUR LOCAL BOOTS PHARMACY (FWK37), ROTHWELL HEALTH CENTRE, STONE BRIG LANE, ROTHWELL, LS26 0UE",
    "WELDRICKS PHARMACY (FA188), 28/29 HALLGATE, DONCASTER, DN1 3NL",
    "WELDRICKS PHARMACY (FA909), STATION ROAD, STAINFORTH, DN7 5NS",
    "WELDRICKS PHARMACY (FAP44), 26 ECKINGTON ROAD, SOTHALL, S20 1HQ",
    "WELDRICKS PHARMACY (FAQ38), 30 CHURCH STREET, HAXEY, DN9 2HY",
    "WELDRICKS PHARMACY (FAW96), 150 CROOKES, CROOKES, S10 1UH",
    "WELDRICKS PHARMACY (FC224), UNIT 3B,WHITE ROSE PARK, TEN POUND WALK, DN4 5FB",
    "WELDRICKS PHARMACY (FC898), 65C MIDLAND ROAD, ROYSTON, S71 4QW",
    "WELDRICKS PHARMACY (FCK54), 40-42 EAST LAITH GATE, DONCASTER, DN1 1HZ",
    "WELDRICKS PHARMACY (FCN37), 81 SANDRINGHAM ROAD, INTAKE, DN2 5JA",
    "WELDRICKS PHARMACY (FDC63), 44 CHURCH STREET, CONISBROUGH, DN12 3HR",
    "WELDRICKS PHARMACY (FDL52), 14 HIGH STREET, CARCROFT, DN6 8DP",
    "WELDRICKS PHARMACY (FDY87), HATFIELD HEALTH CENTRE, ASH HILL ROAD, HATFIELD, DN7 6JH",
    "WELDRICKS PHARMACY (FE250), 188 CROOKESMOOR ROAD, CROOKESMOOR, S10 1BE",
    "WELDRICKS PHARMACY (FE480), 100 AMERSALL ROAD, SCAWTHORPE, DN5 9PH",
    "WELDRICKS PHARMACY (FEE20), ST.ANDREWS SQUARE, BOLTON-ON-DEARNE, S63 8BA",
    "WELDRICKS PHARMACY (FEJ29), 5 CHURCH STREET, EPWORTH, DN9 1ER",
    "WELDRICKS PHARMACY (FEL24), 54 BRECKS LANE, KIRK SANDALL, DN3 1JR",
    "WELDRICKS PHARMACY (FET26), THE THURNSCOE CENTRE, HOLLY BUSH DR, THURNSCOE, S63 0LT",
    "WELDRICKS PHARMACY (FFD93), 7 ST WILFRID'S COURT, CANTLEY, DN4 6ED",
    "WELDRICKS PHARMACY (FFF23), 36 HIGH STREET, BAWTRY, DN10 6JE",
    "WELDRICKS PHARMACY (FFR74), 4 HIGH STREET, BARNBURGH, DN5 7EP",
    "WELDRICKS PHARMACY (FG196), THE GOLDTHORPE CENTRE, GOLDTHORPE GRN,GOLDTHORPE, S63 9EH",
    "WELDRICKS PHARMACY (FG261), 45-49 HIGH STREET, CROFTON, WF4 1NG",
    "WELDRICKS PHARMACY (FG545), 48A HIGH STREET, ROYSTON, S71 4RF",
    "WELDRICKS PHARMACY (FGK37), 5-5A YORK BUILDINGS, EDLINGTON LANE, EDLINGTON, DN12 1BY",
    "WELDRICKS PHARMACY (FGM29), 52-52A CLAYPIT LANE, RAWMARSH, S62 5HD",
    "WELDRICKS PHARMACY (FGP83), MARLOWE ROAD, BARNBY DUN, DN3 1AX",
    "WELDRICKS PHARMACY (FHD30), 27 BRINSWORTH LANE, BRINSWORTH, S60 5BS",
    "WELDRICKS PHARMACY (FJG47), 2-4 FINKLE STREET, THORNE, DN8 5DE",
    "WELDRICKS PHARMACY (FJK96), THE BURNS PRACTICE, GOODISON BOULEVARD, DN4 6NJ",
    "WELDRICKS PHARMACY (FK560), DARNALL PRIMARY CARE CTR, MAIN ROAD, S9 4QH",
    "WELDRICKS PHARMACY (FKW02), 35 GRANGE LANE, ROSSINGTON, DN11 0LW",
    "WELDRICKS PHARMACY (FKW67), 1 MOORTHORPE BANK, OWLTHORPE, S20 6PD",
    "WELDRICKS PHARMACY (FL538), UNIT 4, 221 SKELLOW ROAD, SKELLOW, DN6 8JH",
    "WELDRICKS PHARMACY (FL785), THE ORCHARD CENTRE, MARSHLANDS ROAD, DN8 4SB",
    "WELDRICKS PHARMACY (FLD37), 31/33 HIGH STREET, SWALLOWNEST, S26 4TT",
    "WELDRICKS PHARMACY (FLH72), 26-28 BARNSLEY ROAD, GOLDTHORPE, S63 9NF",
    "WELDRICKS PHARMACY (FLL42), 235 SPROTBROUGH ROAD, DN5 8BP",
    "WELDRICKS PHARMACY (FM670), 61-63 BECKETT ROAD, WHEATLEY, DN2 4AD",
    "WELDRICKS PHARMACY (FMF55), 8 EVERINGHAM ROAD, CANTLEY, DN4 6JG",
    "WELDRICKS PHARMACY (FP030), 298 GLOSSOP ROAD, SHEFFIELD, S10 2HS",
    "WELDRICKS PHARMACY (FP196), 1A-3A CHURCH STREET, SWINTON, S64 8QA",
    "WELDRICKS PHARMACY (FP844), UNIT B9, AMELIA COURT, SWANTON CL, DN22 7HJ",
    "WELDRICKS PHARMACY (FP935), FIELD ROAD, STAINFORTH, DN7 5AF",
    "WELDRICKS PHARMACY (FQ008), WELFARE ROAD, THURNSCOE, S63 0JZ",
    "WELDRICKS PHARMACY (FQC31), 122 THORNE ROAD, EDENTHORPE, DN3 2JA",
    "WELDRICKS PHARMACY (FQE67), 66 ROCHESTER ROAD, LODGE MOOR, S10 4JQ",
    "WELDRICKS PHARMACY (FQK76), 14 FIELDSIDE, THORNE, DN8 4BQ",
    "WELDRICKS PHARMACY (FQY35), THE STONE CASTLE CENTRE, GARDENS LANE, CONISBROUGH, DN12 3JW",
    "WELDRICKS PHARMACY (FR709), MALTBY SERVICES CENTRE, BRAITHWELL ROAD, S66 8JE",
    "WELDRICKS PHARMACY (FRQ47), 67 SCROOBY ROAD, HARWORTH, DN11 8JN",
    "WELDRICKS PHARMACY (FTE09), WHITE HOUSE FARM MED CTR, CHURCH STREET, ARMTHORPE, DN3 3AH",
    "WELDRICKS PHARMACY (FTL66), 171 MAIN ROAD, DARNALL, S9 5HP",
    "WELDRICKS PHARMACY (FTP90), THE MARTINWELLS CENTRE, THOMPSON AVE, EDLINGTON, DN12 1JD",
    "WELDRICKS PHARMACY (FVD51), THE ABBEY SHOPPING CENTRE, STATION ROAD, DN7 4JS",
    "WELDRICKS PHARMACY (FWJ24), MARKET PLACE, CROWLE, DN17 4LB",
    "WELDRICKS PHARMACY (FWK94), 296 THORNE ROAD, WHEATLEY HILLS, DN2 5AJ",
    "WELDRICKS PHARMACY (FWT46), THE IRONSTONE CENTRE, WEST STREET, DN15 6HX",
    "WELDRICKS PHARMACY (FWX34), 7-8 THE SQUARE, WALES, S26 5QN",
    "WELDRICKS PHARMACY (FX024), 6 THE PARADE, THOROGATE, S62 7HX",
    "WELDRICKS PHARMACY (FX116), DENABY SPRINGWELL CENTRE, CHURCH ROAD, DN12 4AB",
    "WELDRICKS PHARMACY (FX203), 13 THE PARADE, CHURCH STREET, ARMTHORPE, DN3 3AG",
    "WELDRICKS PHARMACY (FX589), 94A HIGH STREET, MALTBY, S66 7BN",
    "WELDRICKS PHARMACY (FX779), 3 LABURNUM PARADE, MALTBY, S66 8DP",
    "WELDRICKS PHARMACY (FXR73), THE FLYING SCOTSMAN CTR, ST SEPULCHRE GATE WEST, DN1 3AP",
    "WELDRICKS PHARMACY (FXX35), 26 MAIN STREET, CATCLIFFE, S60 5SR",
    "WELDRICKS PHARMACY (FY163), 17 CROWN STREET, SWINTON, S64 8NB"
  ];
  var inputWidth = inputWidth;

  $("#sites").autocomplete({
    open: function() {
      // After menu has been opened, set width to 100px
      $('.ui-menu')
        .width(inputWidth);
    },
    source: availableTags,
    minLength: 2
  }).focus(function() {
    // The following works only once.
    // $(this).trigger('keydown.autocomplete');
    // As suggested by digitalPBK, works multiple times
    // $(this).data("autocomplete").search($(this).val());
    // As noted by Jonny in his answer, with newer versions use uiAutocomplete
    $(this).data("uiAutocomplete").search($(this).val());
  });

});

/* ---------- REASONABLE ADJUSTMENTS ---------- */



$(function() {
  $.widget("custom.catcomplete", $.ui.autocomplete, {
    _create: function() {
      this._super();
      this.widget().menu("option", "items", "> :not(.ui-autocomplete-category)");
    },
    _renderMenu: function(ul, items) {
      var that = this,
        currentCategory = "";
      $.each(items, function(index, item) {
        var li;
        if (item.category != currentCategory) {
          ul.append("<li class='ui-autocomplete-category'>" + item.category + "</li>");
          currentCategory = item.category;
        }
        li = that._renderItemData(ul, item);
        if (item.category) {
          li.attr("aria-label", item.category + " : " + item.label);
        }
      });
    }
  });
  var flags = [{
      label: "Does lip read",
      category: "Communication support"
    },
    {
      label: "Does use communication device",
      category: "Communication support"
    },
    {
      label: "Does use hearing aid",
      category: "Communication support"
    },
    {
      label: "Preferred method of communication: written",
      category: "Communication support"
    },
    {
      label: "Uses a citizen advocate",
      category: "Communication support"
    },
    {
      label: "Uses a legal advocate",
      category: "Communication support"
    },
    {
      label: "Uses alternative communication skill",
      category: "Communication support"
    },
    {
      label: "Uses British Sign Language",
      category: "Communication support"
    },
    {
      label: "Uses cued speech transliterator",
      category: "Communication support"
    },
    {
      label: "Uses Deafblind Manual Alphabet",
      category: "Communication support"
    },
    {
      label: "Uses electronic note taker",
      category: "Communication support"
    },
    {
      label: "Uses lipspeaker",
      category: "Communication support"
    },
    {
      label: "Uses Makaton sign language",
      category: "Communication support"
    },
    {
      label: "Uses manual note taker",
      category: "Communication support"
    },
    {
      label: "Uses personal audio recording device to record information",
      category: "Communication support"
    },
    {
      label: "Uses Personal Communication Passport",
      category: "Communication support"
    },
    {
      label: "Uses sign language",
      category: "Communication support"
    },
    {
      label: "Uses speech to text reporter",
      category: "Communication support"
    },
    {
      label: "Uses telecommunications device for the deaf",
      category: "Communication support"
    },
    {
      label: "British Sign Language interpreter needed",
      category: "Requires communication professional"
    },
    {
      label: "Hands-on signing interpreter needed",
      category: "Requires communication professional"
    },
    {
      label: "Makaton Sign Language interpreter needed",
      category: "Requires communication professional"
    },
    {
      label: "Needs an advocate",
      category: "Requires communication professional"
    },
    {
      label: "Requires deafblind block alphabet interpreter",
      category: "Requires communication professional"
    },
    {
      label: "Requires deafblind communicator guide",
      category: "Requires communication professional"
    },
    {
      label: "Requires deafblind haptic communication interpreter",
      category: "Requires communication professional"
    },
    {
      label: "Requires deafblind manual alphabet interpreter",
      category: "Requires communication professional"
    },
    {
      label: "Requires lipspeaker",
      category: "Requires communication professional"
    },
    {
      label: "Requires manual note taker",
      category: "Requires communication professional"
    },
    {
      label: "Requires sighted guide",
      category: "Requires communication professional"
    },
    {
      label: "Requires speech to text reporter",
      category: "Requires communication professional"
    },
    {
      label: "Sign Supported English interpreter needed",
      category: "Requires communication professional"
    },
    {
      label: "Visual frame sign language interpreter needed",
      category: "Requires communication professional"
    },
    {
      label: "Requires audible alert",
      category: "Requires specific contact method"
    },
    {
      label: "Requires contact by email",
      category: "Requires specific contact method"
    },
    {
      label: "Requires contact by letter",
      category: "Requires specific contact method"
    },
    {
      label: "Requires contact by short message service text message",
      category: "Requires specific contact method"
    },
    {
      label: "Requires contact by telephone",
      category: "Requires specific contact method"
    },
    {
      label: "Requires contact by text relay",
      category: "Requires specific contact method"
    },
    {
      label: "Requires contact via carer",
      category: "Requires specific contact method"
    },
    {
      label: "Requires tactile alert",
      category: "Requires specific contact method"
    },
    {
      label: "Requires visual alert",
      category: "Requires specific contact method"
    }
  ];

  $("#ra-flags").catcomplete({
    delay: 0,
    source: flags
  });

  var numFlags = $(".added-ra-flag").length;
  $('.adjustments-floater').html("Adjustments added: " + numFlags);

  $('#select-ra-flag-btn').click(function(e) {
    var flagVal = $("#ra-flags").val();
    var catVal = (flags.find(x => x.label === flagVal).category);
    $(".modal-flag-category").text(catVal);
    $(".modal-flag-desc").text(flagVal);
    $("#ra-flags").val("");
  });

  var adjustmentsList = [];

  $('#add-ra-flag-btn').click(function(e) {
    var flagVal = $(".modal-flag-desc").text();
    var catVal = $(".modal-flag-category").text();
    var infoVal = $("#ra-supporting-info").val();
    var numFlags = $(".added-ra-flag").length;
    if (infoVal == "") {
      var infoVal = "No supporting information added"
    } else {
      var infoVal = $("#ra-supporting-info").val();
    }
    if (flagVal != "" && numFlags > 0) {
      $(".added-adjustments-list").append("<div class='added-ra-flag added-ra-flag-border-top'><span class='flag-category'>" + catVal + "</span><span class='flag-desc'>" + flagVal + "</span><span class='ra-support-info'>" + infoVal + "</span><span class='remove-flag-container'><a href='#' class='remove-flag-link'>Remove</a></span></div>");
      $("#ra-flags").val("");
      var numFlags = $(".added-ra-flag").length;
    } else if (flagVal != "") {
      $('.no-adjustments-placeholder').hide();
      $(".added-adjustments-list").append("<div class='added-ra-flag'><span class='flag-category'>" + catVal + "</span><span class='flag-desc'>" + flagVal + "</span><span class='ra-support-info'>" + infoVal + "</span><span class='remove-flag-container'><a href='#' class='remove-flag-link'>Remove</a></span></div>");
      $("#ra-flags").val("");
    }
    $("#ra-supporting-info").val("");
    adjustmentsList.push(catVal + " | " + flagVal + " | " + infoVal);
    sessionStorage.setItem("adjustmentsList", JSON.stringify(adjustmentsList));
  });


  $(document).on('click', '.remove-flag-link', function() {
    var numFlags = $(".added-ra-flag").length;
    if (numFlags === 1) {
      $('.no-adjustments-placeholder').show();
      $(this).parent().parent().remove();
    } else {
      $(this).parent().parent().remove();
    }
    var numFlags = $(".added-ra-flag").length;
    $('.adjustments-floater').html("Adjustments added: " + numFlags);
  });

  var numFlags = $(".added-ra-flag").length;

  $(":checkbox").change(function() {
    var flagVal = $(this).val();
    var catVal = (flags.find(x => x.label === flagVal).category);
    var trimFlag = flagVal.replace(/[^a-z0-9\s]/gi, '').replace(/[_\s]/g, '-');
    $(".modal-flag-category").text(catVal);
    $(".modal-flag-desc").text(flagVal);
  });

  /*$(":checkbox").change(function() {
    var flagVal = $(this).val();
    var catVal = (flags.find(x => x.label === flagVal).category);
    var trimFlag = flagVal.replace(/[^a-z0-9\s]/gi, '').replace(/[_\s]/g, '-');
    var numFlags = $(".added-ra-flag").length;
    var checkedBoxesLength = ($(":checkbox:checked").length);
    if (checkedBoxesLength > 0) {
      $('.no-adjustments-placeholder').hide();
    } else {
      $('.no-adjustments-placeholder').show();
    }
    if (this.checked && numFlags > 0) {
      $(".added-adjustments-list").append("<div class='added-ra-flag added-ra-flag-border-top' id=" + trimFlag + "><span class='flag-category'>" + catVal + "</span><span class='flag-desc'>" + flagVal + "</span><span class='remove-flag-container'><a href='#' class='remove-flag-link'>Remove</a></span></div>");
    } else if (this.checked) {
      $(".added-adjustments-list").append("<div class='added-ra-flag' id=" + trimFlag + "><span class='flag-category'>" + catVal + "</span><span class='flag-desc'>" + flagVal + "</span><span class='remove-flag-container'><a href='#' class='remove-flag-link'>Remove</a></span></div>");
    } else {
      $("#" + trimFlag).remove();
    }
    var numFlags = $(".added-ra-flag").length;
    $('.adjustments-floater').html("<a href='#added-adjustments-container'>Adjustments added: " + numFlags + "</a>");
  });*/

  $('#add-bespoke-flag-btn').click(function() {
    var flagVal = $("#bespoke-flags").val();
    var catVal = "Bespoke Adjustment";
    var numFlags = $(".added-ra-flag").length;
    if (flagVal != "" && numFlags > 0) {
      $(".added-adjustments-list").append("<div class='added-ra-flag added-ra-flag-border-top'><span class='flag-category'>" + catVal + "</span><span class='flag-desc'>" + flagVal + "</span><span class='remove-flag-container'><a href='#' class='remove-flag-link'>Remove</a></span></div>");
      $("#ra-flags").val("");
      var numFlags = $(".added-ra-flag").length;
    } else if (flagVal != "") {
      $('.no-adjustments-placeholder').hide();
      $(".added-adjustments-list").append("<div class='added-ra-flag'><span class='flag-category'>" + catVal + "</span><span class='flag-desc'>" + flagVal + "</span><span class='remove-flag-container'><a href='#' class='remove-flag-link'>Remove</a></span></div>");
      $("#ra-flags").val("");
    }
    $("#bespoke-flags").val('');
    var numFlags = $(".added-ra-flag").length;
    $('.adjustments-floater').html("Adjustments added: " + numFlags);
  });

});

$(function() {
  var adjustmentsList = JSON.parse(sessionStorage.getItem("adjustmentsList"));
  var arrayLength = adjustmentsList.length;
  if (arrayLength >= 1) {
    $(".no-adjustments-added-text").hide();
  }
  for (i = 0; i < arrayLength; i++) {
    var adjustmentArray = adjustmentsList[i].split('|');
    $('<div class="scra-card-content"><div class="nhsuk-grid-row"><div class="nhsuk-grid-column-three-quarters nhsuk-u-three-quarters-tablet"><div class="card-content-section"><h4 class="nhsuk-heading-s"><span class="nhsuk-caption-s nhsuk-caption--bottom">' + adjustmentArray[0] + '</span><span role="text">' + adjustmentArray[1] + '</span></h4><h5 class="nhsuk-heading-xs"><span role="text">Supporting information:</span><span class="nhsuk-caption-m nhsuk-caption--bottom">' + adjustmentArray[2] + '</span></h5><p class="nhsuk-body-s">Added: 26-Apr-2019 by James Smith (GO) at Leeds Teaching Hospitals NHS Trust</p></div></div><div class="nhsuk-grid-column-one-quarter nhsuk-u-one-quarter-tablet"><a href="ra-step-3" class="nhsuk-button nhsuk-button--blue ra-edit">Edit</a><a href="ra-step-3" class="nhsuk-button nhsuk-button--red ra-delete">Delete</a></div></div></div>').appendTo($("#added-adjustments-summary"));
  }
});
