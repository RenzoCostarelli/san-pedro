"use client";

import { blocks } from "@/data/varietyBlocks";
import { useRef } from "react";
import { base64img } from "./base64img";
import Tooltip from "./blocks-tooltip";

interface Props {
  activeBlockIds: string[];
}
export default function BlocksMap({ activeBlockIds }: Props) {
  const svgRef = useRef<SVGSVGElement | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  return (
    <div ref={containerRef} className="relative mapwrapper">
      <svg
        id="Layer_1"
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        version="1.1"
        viewBox="0 0 1920 1209.6"
        ref={svgRef}
      >
        <image
          width="1920"
          height="1210"
          transform="translate(.1 -.14)"
          xlinkHref={base64img}
        />
        <g>
          <polygon
            data-block="block-1"
            className={`transition-colors ${
              activeBlockIds.includes("block-1")
                ? "fill-gold/50 cursor-pointer"
                : "fill-transparent"
            }`}
            fill="currentColor"
            stroke="#ffffff"
            strokeMiterlimit="10"
            strokeWidth="2"
            points="1297.96 713.68 1302.73 690.12 1300.34 677.33 1304.43 677.33 1311.91 695.51 1311.91 712.34 1318.03 729.84 1294.9 728.24 1286.82 724.88 1297.96 713.68"
          />

          <path
            className="cls-3"
            stroke="#ffffff"
            strokeMiterlimit="10"
            strokeWidth="2"
            fill="transparent"
            d="M1238.34,688.69l11.23-18.43,28.07-2.52v-8.33l14.29-33.58,1.79-10.35,4.59-3.28s22.45-27.52,22.45-28.28,6.12-16.91,6.12-16.91l9.95-8.08,12.25-6.06,8.16-15.65,18.21-22.97-5.71-4.54-9.19-11.87-19.14-1.01-11.48,10.6-34.96,37.11-8.16,5.3-41.85-16.41,18.88-66.4-53.84-15.9-16.84-1.77-7.14-5.05-91.85-31.3-1.36,5.3,3.66,19.44-3.66,7.07-4.25,7.57,3.06,14.39,5.36,7.07,16.58,21.96,13.01,15.65,2.55,11.87,14.8,8.92,20.41,22.13,7.14,10.1,1.02,10.6,1.79,18.18.77,9.34s-3.83,24.24-3.57,23.48,13.78,16.91,13.78,16.91l13.52,13.43,15.05,6.51,24.49,25.75Z"
          />
          <polygon
            className="cls-8"
            stroke="#ffffff"
            strokeMiterlimit="10"
            strokeWidth="2"
            fill="transparent"
            points="1585.35 701.06 1576.93 683.14 1578.72 676.82 1583.82 672.03 1576.28 656.88 1525.81 700.95 1554.38 734.62 1554.49 734.89 1562.74 754.2 1575.4 754.83 1579.74 744.99 1579.74 739.94 1583.82 737.67 1590.2 717.97 1585.35 701.06"
          />
          <polygon
            className="cls-7"
            stroke="#ffffff"
            strokeMiterlimit="10"
            strokeWidth="2"
            fill="transparent"
            points="1574.74 653.06 1571.57 643.25 1520.54 638.96 1515.44 637.69 1511.1 639.71 1506 637.69 1455.48 644.76 1450.63 647.29 1456.5 654.61 1459.48 659.83 1472.82 662.07 1491.96 669.07 1518.21 691.99 1523.3 697.98 1574.74 653.06"
          />
          <path
            className="cls-7"
            stroke="#ffffff"
            strokeMiterlimit="10"
            strokeWidth="2"
            fill="transparent"
            d="M665.09,709.58l46.36,34.7,2.12-1.38,37.66-51.49-77.36-41.11-31.23-13.34-18.96-12.98-24.8,35.6-3.73,8.75c.46,1.49,1.49,5.11,1.9,8.78.38,3.38-3.53,7.3-7.24,10.21l1.47,2.37-14.03,8.08-10.46,14.39,16.58,21.96,6.38,3.79,9.31.63,8.29,4.42,22.55,16.13,35.19-49.51Z"
          />
          <polygon
            className="cls-4"
            stroke="#ffffff"
            strokeMiterlimit="10"
            strokeWidth="2"
            fill="transparent"
            points="665.96 715.09 633.08 761.36 672.67 789.67 695.63 754.2 705.71 748.02 707.98 746.54 665.96 715.09"
          />
          <polygon
            className="cls-8"
            stroke="#ffffff"
            strokeMiterlimit="10"
            strokeWidth="2"
            fill="transparent"
            points="528.26 596.19 516.55 588.82 516.96 579.87 525.18 564.29 527.57 549.48 509.27 544.48 487.75 531.76 483.05 528.1 459.87 512.81 448.88 509.36 448.64 510.2 443.03 517.27 452.47 531.91 465.48 531.91 479.77 540.75 485.39 554.64 490.23 560.69 491 564.99 485.39 573.82 524.42 636.94 537.69 621.03 539.48 619.62 528.26 596.19"
          />
          <polygon
            className="cls-8"
            stroke="#ffffff"
            strokeMiterlimit="10"
            strokeWidth="2"
            fill="transparent"
            points="404.56 431.22 407.56 438.25 435.89 480.41 449.41 494.05 450.94 502.12 449.95 505.63 461.58 509.28 479.31 520.98 487.51 493.94 404.56 431.22"
          />
          <polygon
            className="cls-3"
            stroke="#ffffff"
            strokeMiterlimit="10"
            strokeWidth="2"
            fill="transparent"
            points="562.72 375.77 626.14 261.45 623.68 260.61 498.14 221.56 452.78 313.35 562.72 375.77"
          />
          <polygon
            className="cls-3"
            stroke="#ffffff"
            strokeMiterlimit="10"
            strokeWidth="2"
            fill="transparent"
            points="450.71 317.54 399.91 420.33 401.48 424.01 489.08 490.25 491.26 483.95 501.88 485.45 560.46 379.85 450.71 317.54"
          />
          <path
            className="cls-3"
            stroke="#ffffff"
            strokeMiterlimit="10"
            strokeWidth="2"
            fill="transparent"
            d="M621.83,619.79l-20.97-15.15-3.06-45.88-74.32-47.86-21.98-16.71-.16.29h-9.91l-8.72,28.76,2.69,1.78,4.66,3.63,20.76,12.26,21.17,5.78-3.05,18.85-8.11,15.38-.27,5.86,10.75,6.77,11.31,23.6,2.73-2.16,7.4,4.04,13.78,19.69,2.55,17.72,11.23,15.6,7.42,11.94c3.17-2.56,5.58-5.15,5.44-6.43-.48-4.29-1.94-8.65-1.95-8.69l-.23-.69,4.45-10.45,26.41-37.92Z"
          />
          <path
            className="cls-3"
            stroke="#ffffff"
            strokeMiterlimit="10"
            strokeWidth="2"
            fill="transparent"
            d="M751.85,358.25l31.21-45.59c-8.27-4.09-20.91-9.97-20.91-9.97l-129.62-39.05-2.63-.9-15.86,28.59,137.82,66.92Z"
          />
          <polygon
            className="cls-3"
            stroke="#ffffff"
            strokeMiterlimit="10"
            strokeWidth="2"
            fill="transparent"
            points="601.63 557.19 614.57 558.79 749.63 361.49 612.14 294.73 503.41 490.75 525.81 507.78 601.58 556.57 601.63 557.19"
          />
          <path
            className="cls-3"
            stroke="#ffffff"
            strokeMiterlimit="10"
            strokeWidth="2"
            fill="transparent"
            d="M884.89,508.63l94.98-129.88-5.44-3.7s-185.41-58.23-184.39-58.57c.24-.08-1.18-.88-3.46-2.06l-64.67,94.47,162.98,99.74Z"
          />
          <polygon
            className="cls-3"
            stroke="#ffffff"
            strokeMiterlimit="10"
            strokeWidth="2"
            fill="transparent"
            points="882.59 511.78 798.59 460.38 751.37 535.59 837.92 572.86 882.59 511.78"
          />
          <polygon
            className="cls-3"
            stroke="#ffffff"
            strokeMiterlimit="10"
            strokeWidth="2"
            fill="transparent"
            points="749.28 538.91 680.04 649.18 753.53 688.24 835.57 576.07 749.28 538.91"
          />
          <polygon
            className="cls-3"
            stroke="#ffffff"
            strokeMiterlimit="10"
            strokeWidth="2"
            fill="transparent"
            points="661.64 496.94 747.74 534.02 795.26 458.34 719.71 412.1 661.64 496.94"
          />
          <polygon
            className="cls-3"
            stroke="#ffffff"
            strokeMiterlimit="10"
            strokeWidth="2"
            fill="transparent"
            points="1418.49 231.36 1448.1 145.04 1492.11 157.85 1504.13 79.85 1432.68 83.55 1432.68 69.42 1390.16 73.79 1385.05 82.21 1378.25 215.84 1375.66 220.42 1418.49 231.36"
          />
          <polygon
            className="cls-2"
            stroke="#ffffff"
            strokeMiterlimit="10"
            strokeWidth="2"
            fill="transparent"
            points="1450.6 149.81 1422.38 232.06 1422.49 232.1 1374.25 373.92 1405.56 384.25 1405.13 378.08 1420.78 332.31 1424.18 307.06 1430.64 294.94 1438.13 290.57 1479.29 241.09 1491.52 161.71 1450.6 149.81"
          />
          <polygon
            className="cls-8"
            stroke="#ffffff"
            strokeMiterlimit="10"
            strokeWidth="2"
            fill="transparent"
            points="1368.3 376.86 1416.59 234.87 1373.68 223.92 1373.49 224.26 1323.14 211.01 1234.13 188.28 1279.59 452.81 1367.02 480.75 1392.88 448.77 1406.15 392.56 1405.92 389.27 1368.3 376.86"
          />
          <polygon
            className="cls-3"
            stroke="#ffffff"
            strokeMiterlimit="10"
            strokeWidth="2"
            fill="transparent"
            points="1377.11 787.86 1377.19 788.02 1387.25 807.07 1404.7 818.45 1433.28 824.51 1455.22 806.08 1457.86 806 1457.88 805.63 1465.04 779.34 1432.55 744.01 1429.96 746.25 1417.2 753.57 1406.66 756.1 1379.44 756.1 1365.92 769.22 1366.29 774.12 1377.11 787.86"
          />
          <polygon
            className="cls-3"
            stroke="#ffffff"
            strokeMiterlimit="10"
            strokeWidth="2"
            fill="transparent"
            points="1467.42 776.16 1490.84 757.54 1470.16 711.51 1435.5 741.46 1467.42 776.16"
          />
          <polygon
            className="cls-6"
            stroke="#ffffff"
            strokeMiterlimit="10"
            strokeWidth="2"
            fill="transparent"
            points="1551 736.67 1515.31 694.59 1489.92 672.46 1471.81 665.83 1458.11 663.53 1456.5 666.47 1465.94 682.63 1465.17 687.93 1474.1 703.84 1474.36 707.88 1473.25 708.84 1495.64 758.69 1468.94 779.93 1461.87 805.88 1463.64 805.83 1468.23 810.88 1509.31 815.68 1556.01 772.51 1559.67 756.95 1551 736.67"
          />
          <polygon
            className="cls-3"
            stroke="#ffffff"
            strokeMiterlimit="10"
            strokeWidth="2"
            fill="transparent"
            points="1373.8 789.97 1363.54 776.94 1361.58 777.55 1312.59 750.04 1304.43 750.04 1325.6 762.66 1341.93 769.98 1349.84 780.33 1376.54 795.16 1373.8 789.97"
          />
          <polygon
            className="cls-3"
            stroke="#ffffff"
            strokeMiterlimit="10"
            strokeWidth="2"
            fill="transparent"
            points="1400.82 841.76 1323.14 786.39 1280.27 758.45 1273.81 744.31 1269.05 739.94 1266.32 746.33 1262.58 748.69 1264.96 783.02 1271.77 797.16 1275.85 813.66 1309.19 851.54 1359.54 878.96 1359.88 887.37 1376.61 913.3 1400.82 841.76"
          />
          <polygon
            className="cls-3"
            stroke="#ffffff"
            strokeMiterlimit="10"
            strokeWidth="2"
            fill="transparent"
            points="1440.91 849.53 1434.38 845.97 1414.99 840.92 1404.4 843.39 1379.34 917.43 1379.5 917.68 1395.46 917.68 1409.22 915.16 1421.21 909.22 1442.63 882.72 1460.65 884.16 1440.91 849.53"
          />
          <polygon
            className="cls-3"
            stroke="#ffffff"
            strokeMiterlimit="10"
            strokeWidth="2"
            fill="transparent"
            points="1498 848.66 1480.65 843.95 1446.34 851.17 1464.81 883.58 1477.8 878.55 1480.09 873.17 1511.85 873.17 1512.29 859.77 1498 848.66"
          />
          <polygon
            className="cls-8"
            stroke="#ffffff"
            strokeMiterlimit="10"
            strokeWidth="2"
            fill="transparent"
            points="1441.55 1008.05 1446.31 1006.59 1469.61 1012.92 1477.54 882.81 1463.46 888.27 1444.39 886.75 1423.73 912.31 1410.47 918.87 1395.82 921.55 1382.11 921.55 1382.67 922.38 1422.82 1003.17 1426.56 1004.51 1439.15 1003.84 1441.55 1008.05"
          />
          <polygon
            className="cls-9"
            stroke="#ffffff"
            strokeMiterlimit="10"
            strokeWidth="2"
            fill="transparent"
            points="1469.37 1016.88 1446.37 1010.62 1443.52 1011.5 1454.12 1030.09 1467.78 1042.95 1469.37 1016.88"
          />
          <path
            className="cls-8"
            stroke="#ffffff"
            strokeMiterlimit="10"
            strokeWidth="2"
            fill="transparent"
            d="M1536.79,1110.21l1.7-8.42,7.48-1.01-2.38-5.39-16.33-15.82-5.44-14.81.34-35.34-8.16-15.15.68-14.47s9.87-21.21,8.85-20.87c-1.02.34-.68-10.77-.68-10.77l4.76-5.39-.34-23.9-5.44-43.76-10.21-14.47.12-3.59h-29.04l-1.02,2.4-10.09,165.53-.04.16-.26,1.12,31.48,29.62-.34,17.5,9.53,2.02c0,1.35,2.04,10.1,2.04,10.1l2.38,5.39-16.33,12.12,11.23,17.17,7.14-4.04,11.57-3.03,2.72,5.05,7.82-5.72v-4.04l3.74-5.39,4.76-1.01,1.7-7.41-13.95-4.38Z"
          />
          <polygon
            className="cls-3"
            stroke="#ffffff"
            strokeMiterlimit="10"
            strokeWidth="2"
            fill="transparent"
            points="1134.28 807.96 1109.32 758.47 1052.83 724.82 1012.35 777.27 1106.97 848.74 1134.28 807.96"
          />
          <polygon
            className="cls-3"
            stroke="#ffffff"
            strokeMiterlimit="10"
            strokeWidth="2"
            fill="transparent"
            points="888.99 757.91 908.98 773.64 923.38 780.8 1012.84 847.06 1041.8 879.23 1067.93 894.4 1091.67 860.94 1099.16 858.91 1104.69 851.89 921.93 713.85 888.99 757.91"
          />
          <polygon
            className="cls-3"
            stroke="#ffffff"
            strokeMiterlimit="10"
            strokeWidth="2"
            fill="transparent"
            points="946.93 891.97 958.64 887.46 992.03 889.5 1012.44 897.28 1026.29 904.62 1040.17 904.62 1063.87 896.79 1039.4 882.39 1010.18 849.93 924.19 786.24 924.68 879.68 920.45 889.71 946.93 891.97"
          />
          <polygon
            className="cls-3"
            stroke="#ffffff"
            strokeMiterlimit="10"
            strokeWidth="2"
            fill="transparent"
            points="901.04 885.56 916.45 889.15 920.76 878.91 920.26 783.55 918.37 782.62 883.77 874.47 901.04 885.56"
          />
          <path
            className="cls-3"
            stroke="#ffffff"
            strokeMiterlimit="10"
            strokeWidth="2"
            fill="transparent"
            d="M1051.48,720.19c.31-.98.81-1.9,1.5-2.75l-90.94-57.22-37.77,50.52,84.97,64.18,42.24-54.73Z"
          />
          <polygon
            className="cls-10"
            stroke="#ffffff"
            strokeMiterlimit="10"
            strokeWidth="2"
            fill="transparent"
            points="1157.28 702.26 1202.63 778.59 1202.71 771.24 1207.81 764.51 1217.67 722.77 1190.8 686.75 1159.84 702.91 1157.28 702.26"
          />
          <polygon
            className="cls-3"
            stroke="#ffffff"
            strokeMiterlimit="10"
            strokeWidth="2"
            fill="transparent"
            points="956.09 972.8 964.9 909.8 913.07 904.72 878.38 891.32 822.88 886.36 822.02 889.73 826.1 894.44 839.37 902.82 847.53 909.59 954.02 972.53 956.09 972.8"
          />
          <polygon
            className="cls-3"
            stroke="#ffffff"
            strokeMiterlimit="10"
            strokeWidth="2"
            fill="transparent"
            points="828.37 864.92 834.74 870.83 880.05 873.24 914.85 780.88 906.86 776.92 886.66 761.02 825.42 842.94 828.82 863.14 828.37 864.92"
          />
          <polygon
            className="cls-3"
            stroke="#ffffff"
            strokeMiterlimit="10"
            strokeWidth="2"
            fill="transparent"
            points="1097.33 623.61 1081.6 646.03 1145 689.09 1150.31 666.89 1131.6 607.31 1122.08 595.2 1116.97 585.44 1082.61 548.66 1057.07 532.25 1029.67 569.16 1097.33 623.61"
          />
          <polygon
            className="cls-3"
            stroke="#ffffff"
            strokeMiterlimit="10"
            strokeWidth="2"
            fill="transparent"
            points="1057.7 715.82 1060.5 662.43 1085.23 634.07 1092.05 624.35 1027.35 572.29 966.6 654.1 964.37 657.1 1057.7 715.82"
          />
          <polygon
            className="cls-1"
            stroke="#ffffff"
            strokeMiterlimit="10"
            strokeWidth="2"
            fill="none"
            points="1193.27 770.47 1170.13 785.42 1170.13 805.24 1155.61 801.22 1151.3 806.44 1138.35 807.37 1138.79 808.24 1110.09 851.1 1110.21 851.18 1101.45 862.31 1093.97 864.33 1071.55 896.09 1073.18 896.86 1041.02 908.5 1025.31 908.5 1010.69 900.75 991.19 893.33 959.26 891.38 947.5 895.91 918.87 893.46 918.78 893.67 899.48 889.18 880.76 877.16 833.11 874.63 827.27 869.21 823.85 882.56 879.28 887.51 913.99 900.91 967.16 906.13 998.3 904.59 1021.18 920.27 1044.7 920.27 1091.37 895.53 1100.15 879.38 1112.54 879.38 1122 874.03 1126.54 847.62 1150.22 821.53 1178.79 830.61 1185.61 823.02 1185.61 800.03 1201.86 784.94 1193.27 770.47"
          />
          <path
            className="cls-10"
            stroke="#ffffff"
            strokeMiterlimit="10"
            strokeWidth="2"
            fill="transparent"
            d="M1175.15,739.98l-37.73,22.18,1.92,2.52s6.77,16.86,13.64,33.6l1.22-1.47,12.02,3.32v-16.81l25.06-16.19-16.13-27.15Z"
          />
          <polygon
            className="cls-3"
            stroke="#ffffff"
            strokeMiterlimit="10"
            strokeWidth="2"
            fill="transparent"
            points="1096.53 721.62 1145 694.07 1144.77 693.63 1078 648.29 1064.34 663.95 1062.15 705.66 1072.48 710.42 1071.1 710.3 1096.53 721.62"
          />
          <polygon
            className="cls-3"
            stroke="#ffffff"
            strokeMiterlimit="10"
            strokeWidth="2"
            fill="transparent"
            points="1151.93 700.9 1147.93 699.88 1146.75 697.54 1100.94 723.59 1103.71 724.82 1120.21 739.6 1135.04 759.05 1173.16 736.64 1151.93 700.9"
          />
          <polygon
            className="cls-3"
            stroke="#ffffff"
            strokeMiterlimit="10"
            strokeWidth="2"
            fill="transparent"
            points="1072.64 1013.6 1075.56 1014.85 1103.6 1026.02 1107.89 1015.51 1134.5 996.49 1119.53 968.08 1091.47 968.08 1051.4 942.64 1043.58 924.15 1019.96 924.15 997.17 908.53 968.83 909.93 959.97 973.3 961.84 973.54 966.26 978.93 1003.69 1000.47 1022.4 1006.87 1025.46 990.71 1038.39 987.01 1055.4 989.36 1072.64 1013.6"
          />
          <polygon
            className="cls-3"
            stroke="#ffffff"
            strokeMiterlimit="10"
            strokeWidth="2"
            fill="transparent"
            points="1301.69 962.78 1301.39 962.85 1188.45 1052.17 1188.45 1052.17 1188.03 1052.51 1165.6 1052.51 1163.9 1060.56 1177.5 1077.13 1178.89 1077.56 1223.8 1096.74 1247.61 1108.19 1271.77 1108.19 1279.93 1105.83 1286.74 1098.43 1259.52 1058.71 1267.34 1046.25 1269.05 1040.87 1281.97 1033.12 1297.96 1040.53 1325.52 1080.59 1333.68 1082.94 1342.53 1082.94 1347.63 1079.58 1353.08 1074.19 1363.62 1046.25 1301.69 962.78"
          />
          <polygon
            className="cls-3"
            stroke="#ffffff"
            strokeMiterlimit="10"
            strokeWidth="2"
            fill="transparent"
            points="1226.86 839.57 1226.12 838.47 1169.64 941.31 1183.52 965.12 1259.73 919.07 1244.92 908.79 1256.06 896.6 1278.86 906.81 1293.58 899.27 1292.86 898.82 1282.31 894.44 1253.74 877.61 1248.63 869.87 1243.53 864.82 1236.39 853.71 1229.24 851.54 1226.86 839.57"
          />
          <polygon
            className="cls-3"
            stroke="#ffffff"
            strokeMiterlimit="10"
            strokeWidth="2"
            fill="transparent"
            points="1166.25 1049.41 1186.92 1049.41 1215.65 1026.42 1126.16 872.96 1125.55 876.48 1113.58 883.25 1102.49 883.25 1094.26 898.4 1047.43 923.22 1054.54 940.03 1092.62 964.2 1121.9 964.2 1166.41 1048.66 1166.25 1049.41"
          />
          <polygon
            className="cls-3"
            stroke="#ffffff"
            strokeMiterlimit="10"
            strokeWidth="2"
            fill="transparent"
            points="1167.8 938.17 1224.17 835.54 1202.37 802.88 1202.51 789.65 1189.52 801.7 1189.52 824.49 1180.02 835.07 1151.43 825.98 1130.21 849.37 1126.98 868.17 1167.8 938.17"
          />
          <path
            className="cls-10"
            stroke="#ffffff"
            strokeMiterlimit="10"
            strokeWidth="2"
            fill="transparent"
            d="M1159.69,1061.57l2.6-12.34-25.96-49.26-25.24,18.04-5.32,13.05-30.32-12.07,1.72,6.06-1.02,7.41,6.46,26.93,8.85,1.35,5.1,3.07-4.51-28.31s13.14.29,21.58,33.76l13.55,3.6,6.12-.34,36.06,13.46,4.03-7.7-13.7-16.7Z"
          />
          <polygon
            className="cls-10"
            stroke="#ffffff"
            strokeMiterlimit="10"
            strokeWidth="2"
            fill="transparent"
            points="1302.01 945.21 1281.27 913.97 1254.86 925.64 1185.09 967.81 1218.24 1024.65 1299.84 960.11 1296.6 955.03 1302.01 945.21"
          />
          <polygon
            className="cls-5"
            stroke="#ffffff"
            strokeMiterlimit="10"
            strokeWidth="2"
            fill="transparent"
            points="1335.73 923.73 1330.28 916.99 1307.44 907.11 1306.47 913.3 1293.58 908.53 1284.9 912.36 1305.07 942.76 1316.22 937.19 1339.81 934.16 1335.73 923.73"
          />
        </g>
      </svg>
      {blocks
        .filter((b) => activeBlockIds.includes(b.id))
        .map((b) => (
          <Tooltip
            key={b.id}
            coord={b.coord}
            name={`${b.name}`}
            ha={b.ha}
            variety={b.varieties}
          />
        ))}
    </div>
  );
}
