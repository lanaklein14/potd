const layout01_50_101_150 = new Layout([
    new Room('A1', 224, -422, 260, -384),
    new Room('A2', 269, -435, 314, -399), //見直しOK
    new Room('A3', 369, -423, 406, -386), //見直しOK
    new Room('A4', 180, -364, 217, -328), //見直しOK
    new Room('A5', 235, -364, 271, -328), //見直しOK
    new Room('A6', 294, -376, 329, -341), //見直しOK
    new Room('A7', 350, -364, 386, -328), //見直しOK
    new Room('A8', 409, -383, 444, -338), //見直しOK
    new Room('A9', 165, -319, 202, -282), //見直しOK
    new Room('A10', 224, -306, 259, -270), //見直しOK
    new Room('A11', 282, -318, 317, -283), //見直しOK
    new Room('A12', 346, -318, 389, -282), //見直しOK
    new Room('A13', 412, -330, 448, -294),
    new Room('A14', 165, -249, 202, -212), //見直しOK
    new Room('A15', 224, -261, 259, -224), //見直しOK
    new Room('A16', 283, -259, 317, -225),
    new Room('A17', 348, -273, 383, -237), //見直しOK
    new Room('A18', 400, -272, 437, -236),
    new Room('A19', 223, -206, 260, -162), //見直しOK
    new Room('A20', 301, -201, 336, -167),
    new Room('A21', 360, -214, 395, -178),

    new Room('B1', -394, 169, -357, 206), //見直しOK
    new Room('B2', -307, 162, -270, 206), //見直しOK
    new Room('B3', -242, 182, -205, 217), //見直しOK
    new Room('B4', -420, 225, -383, 262), //見直しOK
    new Room('B5', -374, 226, -338, 261), //見直しOK
    new Room('B6', -318, 225, -283, 262), //見直しOK
    new Room('B7', -254, 238, -217, 274), //見直しOK
    new Room('B8', -201, 238, -157, 274), //見直しOK
    new Room('B9', -438, 281, -396, 317),
    new Room('B10', -384, 283, -350, 317), //見直しOK
    new Room('B11', -318, 278, -283, 321), //見直しOK
    new Room('B12', -253, 297, -217, 331),
    new Room('B13', -199, 292, -163, 335),
    new Room('B14', -427, 340, -389, 376),
    new Room('B15', -375, 340, -337, 376),
    new Room('B16', -318, 340, -282, 375), //見直しOK
    new Room('B17', -254, 352, -218, 387), //見直しOK
    new Room('B18', -197, 352, -163, 388),
    new Room('B19', -388, 396, -345, 432),
    new Room('B20', -339, 397, -302, 433), //見直しOK
    new Room('B21', -242, 407, -205, 444), //見直しOK

    new Room('C1', -320, -327, -281, -288), //見直しOK
    new Room('C2', -326, -246, -275, -195), //見直しOK

    new Room('D1', 284, 288, 315, 317),
    new Room('D2', 275, 349, 324, 398),
]);
// Add all passages
layout01_50_101_150.addPassage('A1', 'A5');
layout01_50_101_150.addPassage('A2', 'A6');
layout01_50_101_150.addPassage('A3', 'A7');
layout01_50_101_150.addPassage('A5', 'A10');
layout01_50_101_150.addPassage('A6', 'A11');
layout01_50_101_150.addPassage('A7', 'A12');
layout01_50_101_150.addPassage('A10', 'A15');
layout01_50_101_150.addPassage('A11', 'A16');
layout01_50_101_150.addPassage('A12', 'A17');
layout01_50_101_150.addPassage('A15', 'A19');
layout01_50_101_150.addPassage('A16', 'A20');
layout01_50_101_150.addPassage('A17', 'A21');
layout01_50_101_150.addPassage('A4', 'A5');
layout01_50_101_150.addPassage('A5', 'A6');
layout01_50_101_150.addPassage('A6', 'A7');
layout01_50_101_150.addPassage('A7', 'A8');
layout01_50_101_150.addPassage('A9', 'A10');
layout01_50_101_150.addPassage('A10', 'A11');
layout01_50_101_150.addPassage('A11', 'A12');
layout01_50_101_150.addPassage('A12', 'A13');
layout01_50_101_150.addPassage('A14', 'A15');
layout01_50_101_150.addPassage('A15', 'A16');
layout01_50_101_150.addPassage('A16', 'A17');
layout01_50_101_150.addPassage('A17', 'A18');
layout01_50_101_150.addPassage('B1', 'B5');
layout01_50_101_150.addPassage('B2', 'B6');
layout01_50_101_150.addPassage('B3', 'B7');
layout01_50_101_150.addPassage('B5', 'B10');
layout01_50_101_150.addPassage('B6', 'B11');
layout01_50_101_150.addPassage('B7', 'B12');
layout01_50_101_150.addPassage('B10', 'B15');
layout01_50_101_150.addPassage('B11', 'B16');
layout01_50_101_150.addPassage('B12', 'B17');
layout01_50_101_150.addPassage('B15', 'B19');
layout01_50_101_150.addPassage('B16', 'B20');
layout01_50_101_150.addPassage('B17', 'B21');
layout01_50_101_150.addPassage('B4', 'B5');
layout01_50_101_150.addPassage('B5', 'B6');
layout01_50_101_150.addPassage('B6', 'B7');
layout01_50_101_150.addPassage('B7', 'B8');
layout01_50_101_150.addPassage('B9', 'B10');
layout01_50_101_150.addPassage('B10', 'B11');
layout01_50_101_150.addPassage('B11', 'B12');
layout01_50_101_150.addPassage('B12', 'B13');
layout01_50_101_150.addPassage('B14', 'B15');
layout01_50_101_150.addPassage('B15', 'B16');
layout01_50_101_150.addPassage('B16', 'B17');
layout01_50_101_150.addPassage('B17', 'B18');
layout01_50_101_150.addPassage('C1', 'C2');
layout01_50_101_150.addPassage('D1', 'D2');

// Add all traps
layout01_50_101_150.addTrap(242.93, -400.19);
layout01_50_101_150.addTrap(245.67, -398.73);
layout01_50_101_150.addTrap(296.79, -410.51);
layout01_50_101_150.addTrap(394.83, -398.19);
layout01_50_101_150.addTrap(201.95, -343.24);
layout01_50_101_150.addTrap(204.62, -341.65);
layout01_50_101_150.addTrap(251.46, -334.01);
layout01_50_101_150.addTrap(262.02, -336.51);
layout01_50_101_150.addTrap(264.34, -337.46);
layout01_50_101_150.addTrap(319.49, -350.81);
layout01_50_101_150.addTrap(304.98, -364.48);
layout01_50_101_150.addTrap(321.05, -351.13);
layout01_50_101_150.addTrap(310.99, -349.19);
layout01_50_101_150.addTrap(302.79, -353.48);
layout01_50_101_150.addTrap(359.72, -342.79);
layout01_50_101_150.addTrap(367.56, -345.67);
layout01_50_101_150.addTrap(369.86, -343.22);
layout01_50_101_150.addTrap(373.21, -341.7);
layout01_50_101_150.addTrap(431.67, -352.17);
layout01_50_101_150.addTrap(189.8, -297.49);
layout01_50_101_150.addTrap(243.42, -286.34);
layout01_50_101_150.addTrap(246.14, -284.84);
layout01_50_101_150.addTrap(291.67, -294.59);
layout01_50_101_150.addTrap(303.13, -295.4);
layout01_50_101_150.addTrap(306.45, -293.39);
layout01_50_101_150.addTrap(368.32, -299.54);
layout01_50_101_150.addTrap(368.92, -297.43);
layout01_50_101_150.addTrap(371.41, -296.06);
layout01_50_101_150.addTrap(376.09, -294.09);
layout01_50_101_150.addTrap(432.0, -308.33);
layout01_50_101_150.addTrap(435.32, -306.68);
layout01_50_101_150.addTrap(186.77, -227.84);
layout01_50_101_150.addTrap(190.02, -226.07);
layout01_50_101_150.addTrap(249.92, -233.84);
layout01_50_101_150.addTrap(250.25, -248.37);
layout01_50_101_150.addTrap(250.88, -247.96);
layout01_50_101_150.addTrap(302.66, -239.8);
layout01_50_101_150.addTrap(306.18, -238.23);
layout01_50_101_150.addTrap(364.39, -246.14);
layout01_50_101_150.addTrap(373.86, -248.43);
layout01_50_101_150.addTrap(425.37, -250.27);
layout01_50_101_150.addTrap(247.17, -183.26);
layout01_50_101_150.addTrap(325.88, -180.53);
layout01_50_101_150.addTrap(383.46, -191.33);
layout01_50_101_150.addTrap(-376.71, 187.8);
layout01_50_101_150.addTrap(-373.73, 189.42);
layout01_50_101_150.addTrap(-282.86, 187.42);
layout01_50_101_150.addTrap(-219.06, 205.65);
layout01_50_101_150.addTrap(-399.7, 244.82);
layout01_50_101_150.addTrap(-353.17, 245.27);
layout01_50_101_150.addTrap(-354.95, 245.82);
layout01_50_101_150.addTrap(-356.14, 243.66);
layout01_50_101_150.addTrap(-295.47, 248.96);
layout01_50_101_150.addTrap(-306.86, 248.06);
layout01_50_101_150.addTrap(-300.18, 245.37);
layout01_50_101_150.addTrap(-242.8, 264.94);
layout01_50_101_150.addTrap(-241.61, 265.82);
layout01_50_101_150.addTrap(-226.57, 248.39);
layout01_50_101_150.addTrap(-225.38, 249.28);
layout01_50_101_150.addTrap(-178.21, 259.59);
layout01_50_101_150.addTrap(-416.34, 301.42);
layout01_50_101_150.addTrap(-368.36, 300.04);
layout01_50_101_150.addTrap(-365.37, 301.63);
layout01_50_101_150.addTrap(-309.98, 296.06);
layout01_50_101_150.addTrap(-302.1, 303.93);
layout01_50_101_150.addTrap(-302.5, 303.78);
layout01_50_101_150.addTrap(-289.83, 292.46);
layout01_50_101_150.addTrap(-291.18, 302.31); 
layout01_50_101_150.addTrap(-235.58, 315.89);
layout01_50_101_150.addTrap(-235.59, 315.95);
layout01_50_101_150.addTrap(-230.82, 319.39);
layout01_50_101_150.addTrap(-178.21, 317.9);
layout01_50_101_150.addTrap(-404.43, 359.67);
layout01_50_101_150.addTrap(-368.82, 365.22);
layout01_50_101_150.addTrap(-343.97, 367.27);
layout01_50_101_150.addTrap(-340.95, 351.51);
layout01_50_101_150.addTrap(-340.34, 352.14);
layout01_50_101_150.addTrap(-302.56, 367.16);
layout01_50_101_150.addTrap(-291.18, 365.7);
layout01_50_101_150.addTrap(-229.65, 375.09);
layout01_50_101_150.addTrap(-178.21, 373.09);
layout01_50_101_150.addTrap(-366.85, 413.88);
layout01_50_101_150.addTrap(-361.88, 416.74);
layout01_50_101_150.addTrap(-320.02, 414.94);
layout01_50_101_150.addTrap(-315.28, 418.52);
layout01_50_101_150.addTrap(-218.08, 429.41);

// Add all accursed hoard
layout01_50_101_150.addAccursedHoard(199.84, -345.01);
layout01_50_101_150.addAccursedHoard(201.95, -343.24);
layout01_50_101_150.addAccursedHoard(319.49, -350.81);
layout01_50_101_150.addAccursedHoard(367.56, -345.67);
layout01_50_101_150.addAccursedHoard(187.12, -299.06);
layout01_50_101_150.addAccursedHoard(371.41, -296.06);
layout01_50_101_150.addAccursedHoard(262.02, -336.51);
layout01_50_101_150.addAccursedHoard(432, -308.33);
layout01_50_101_150.addAccursedHoard(250.25, -248.37);
layout01_50_101_150.addAccursedHoard(250.55, -233.44);
layout01_50_101_150.addAccursedHoard(300.26, -242.39);
layout01_50_101_150.addAccursedHoard(302.66, -239.8);
layout01_50_101_150.addAccursedHoard(372, -247.4);
layout01_50_101_150.addAccursedHoard(422.2, -251.71);
layout01_50_101_150.addAccursedHoard(380.2, -192.89);
layout01_50_101_150.addAccursedHoard(-287.57, 183.84);
layout01_50_101_150.addAccursedHoard(-356.14, 243.66);
layout01_50_101_150.addAccursedHoard(-295.47, 248.96);
layout01_50_101_150.addAccursedHoard(-300.18, 245.37);
layout01_50_101_150.addAccursedHoard(-225.63, 265.21);
layout01_50_101_150.addAccursedHoard(-367.78, 304.97);
layout01_50_101_150.addAccursedHoard(-302.1, 303.93);
layout01_50_101_150.addAccursedHoard(-302.5, 303.78);
layout01_50_101_150.addAccursedHoard(-235.57, 315.90);
layout01_50_101_150.addAccursedHoard(-235.59, 315.95);
layout01_50_101_150.addAccursedHoard(-407.39, 358.04);
layout01_50_101_150.addAccursedHoard(-302.56, 367.16);
layout01_50_101_150.addAccursedHoard(-234.4, 371.6);
layout01_50_101_150.addAccursedHoard(-366.92, 414.01);
layout01_50_101_150.addAccursedHoard(-320.02, 414.94);


const layout51_100_151_200 = new Layout([
    new Room('A1', 225, -426, 262, -391), //見直しOK
    new Room('A2', 270, -431, 313, -397), //見直しOK
    new Room('A3', 361, -426, 407, -390), //見直しOK
    new Room('A4', 185, -362, 220, -327), //見直しOK
    new Room('A5', 236, -363, 271, -326), //見直しOK
    new Room('A6', 295, -375, 329, -340), //見直しOK
    new Room('A7', 351, -362, 386, -328), //見直しOK
    new Room('A8', 409, -382, 443, -339),
    new Room('A9', 166, -318, 202, -282),
    new Room('A10', 225, -305, 259, -270),
    new Room('A11', 281, -319, 318, -282), //見直しOK
    new Room('A12', 338, -307, 373, -270), //見直しOK
    new Room('A13', 397, -307, 442, -270), //見直しOK
    new Room('A14', 173, -251, 208, -215), //見直しOK
    new Room('A15', 225, -255, 261, -210), //見直しOK
    new Room('A16', 281, -262, 318, -225), //見直しOK
    new Room('A17', 340, -255, 374, -210), //見直しOK
    new Room('A18', 400, -272, 437, -236),
    new Room('A19', 219, -190, 248, -153), //見直しOK0
    new Room('A20', 301, -206, 337, -170), //見直しOK
    new Room('A21', 360, -214, 395, -178),

    new Room('B1', -393, 170, -357, 206),
    new Room('B2', -306, 163, -270, 206),
    new Room('B3', -240, 184, -205, 217),
    new Room('B4', -419, 227, -383, 261),
    new Room('B5', -371, 225, -334, 262), //見直しOK
    new Room('B6', -317, 227, -283, 261),
    new Room('B7', -252, 239, -218, 273),
    new Room('B8', -201, 238, -156, 274),
    new Room('B9', -438, 281, -396, 317),
    new Room('B10', -383, 281, -346, 318), //見直しOK
    new Room('B11', -316, 277, -283, 320), //見直しOK
    new Room('B12', -253, 293, -217, 330), //見直しOK
    new Room('B13', -199, 292, -163, 335),
    new Room('B14', -423, 337, -389, 374), //見直しOK
    new Room('B15', -371, 337, -334, 375), //見直しOK
    new Room('B16', -317, 340, -282, 375), //見直しOK
    new Room('B17', -252, 352, -218, 385),
    new Room('B18', -197, 352, -163, 388),
    new Room('B19', -387, 396, -342, 429), //見直しOK
    new Room('B20', -338, 398, -302, 433),
    new Room('B21', -298, 394, -263, 430), //見直しOK

    new Room('C1', -309, -364, -293, -348), //見直しOK0
    new Room('C2', -319, -323, -282, -286), //見直しOK
    new Room('C3', -326, -247, -275, -195), //見直しOK

    new Room('D1', 284, 173, 311, 200), //見直しOK0
    new Room('D2', 275, 272, 324, 324), //見直しOK0
]);
layout51_100_151_200.addPassage('A1', 'A5');
layout51_100_151_200.addPassage('A2', 'A6');
layout51_100_151_200.addPassage('A3', 'A7');
layout51_100_151_200.addPassage('A5', 'A10');
layout51_100_151_200.addPassage('A6', 'A11');
layout51_100_151_200.addPassage('A7', 'A12');
layout51_100_151_200.addPassage('A10', 'A15');
layout51_100_151_200.addPassage('A11', 'A16');
layout51_100_151_200.addPassage('A12', 'A17');
layout51_100_151_200.addPassage('A15', 'A19');
layout51_100_151_200.addPassage('A16', 'A20');
layout51_100_151_200.addPassage('A17', 'A21');
layout51_100_151_200.addPassage('A4', 'A5');
layout51_100_151_200.addPassage('A5', 'A6');
layout51_100_151_200.addPassage('A6', 'A7');
layout51_100_151_200.addPassage('A7', 'A8');
layout51_100_151_200.addPassage('A9', 'A10');
layout51_100_151_200.addPassage('A10', 'A11');
layout51_100_151_200.addPassage('A11', 'A12');
layout51_100_151_200.addPassage('A12', 'A13');
layout51_100_151_200.addPassage('A14', 'A15');
layout51_100_151_200.addPassage('A15', 'A16');
layout51_100_151_200.addPassage('A16', 'A17');
layout51_100_151_200.addPassage('A17', 'A18');
layout51_100_151_200.addPassage('B1', 'B5');
layout51_100_151_200.addPassage('B2', 'B6');
layout51_100_151_200.addPassage('B3', 'B7');
layout51_100_151_200.addPassage('B5', 'B10');
layout51_100_151_200.addPassage('B6', 'B11');
layout51_100_151_200.addPassage('B7', 'B12');
layout51_100_151_200.addPassage('B10', 'B15');
layout51_100_151_200.addPassage('B11', 'B16');
layout51_100_151_200.addPassage('B12', 'B17');
layout51_100_151_200.addPassage('B15', 'B19');
layout51_100_151_200.addPassage('B16', 'B20');
layout51_100_151_200.addPassage('B17', 'B21');
layout51_100_151_200.addPassage('B4', 'B5');
layout51_100_151_200.addPassage('B5', 'B6');
layout51_100_151_200.addPassage('B6', 'B7');
layout51_100_151_200.addPassage('B7', 'B8');
layout51_100_151_200.addPassage('B9', 'B10');
layout51_100_151_200.addPassage('B10', 'B11');
layout51_100_151_200.addPassage('B11', 'B12');
layout51_100_151_200.addPassage('B12', 'B13');
layout51_100_151_200.addPassage('B14', 'B15');
layout51_100_151_200.addPassage('B15', 'B16');
layout51_100_151_200.addPassage('B16', 'B17');
layout51_100_151_200.addPassage('B17', 'B18');
layout51_100_151_200.addPassage('C1', 'C2');
layout51_100_151_200.addPassage('C2', 'C3');
layout51_100_151_200.addPassage('D1', 'D2');


const layoutExit = new Layout([
    new Room('Exit B1-B10', -123, 81, -78, 118),
    new Room('Exit B61-B70', -216, -116, -185, -85),
    //    new Room('Exit B71-B80', -371, 338, -355, 373),
]);


class DDUtility {
    static zoneData(zoneID) {
        const zoneMap = {
            561: {
                baseFloor: 1,
                layout: layout01_50_101_150
            },
            562: {
                baseFloor: 11,
                layout: layout01_50_101_150
            },
            563: {
                baseFloor: 21,
                layout: layout01_50_101_150
            },
            564: {
                baseFloor: 31,
                layout: layout01_50_101_150
            },
            565: {
                baseFloor: 41,
                layout: layout01_50_101_150
            },
            593: {
                baseFloor: 51,
                layout: layout51_100_151_200
            },
            594: {
                baseFloor: 61,
                layout: layout51_100_151_200
            },
            595: {
                baseFloor: 71,
                layout: layout51_100_151_200
            },
            596: {
                baseFloor: 81,
                layout: layout51_100_151_200
            },
            597: {
                baseFloor: 91,
                layout: layout51_100_151_200
            },
            598: {
                baseFloor: 101,
                layout: layout01_50_101_150
            },
            599: {
                baseFloor: 111,
                layout: layout01_50_101_150
            },
            600: {
                baseFloor: 121,
                layout: layout01_50_101_150
            },
            601: {
                baseFloor: 131,
                layout: layout01_50_101_150
            },
            602: {
                baseFloor: 141,
                layout: layout01_50_101_150
            },
            603: {
                baseFloor: 151,
                layout: layout51_100_151_200
            },
            604: {
                baseFloor: 161,
                layout: layout51_100_151_200
            },
            605: {
                baseFloor: 171,
                layout: layout51_100_151_200
            },
            606: {
                baseFloor: 181,
                layout: layout51_100_151_200
            },
            607: {
                baseFloor: 191,
                layout: layout51_100_151_200
            },
            570: {
                baseFloor: 0,
                layout: layoutExit
            }
        };
        return zoneMap[zoneID];
    }
}