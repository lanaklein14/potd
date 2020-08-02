const layout01_50_101_150 = new Layout([
    new Room('A1', 223, -423, 260, -386), //見直しOK
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
    new Room('A13', 412, -331, 448, -294), //見直しOK
    new Room('A14', 165, -249, 202, -212), //見直しOK
    new Room('A15', 224, -261, 259, -224), //見直しOK
    new Room('A16', 282, -260, 317, -225), //見直しOK
    new Room('A17', 348, -273, 383, -237), //見直しOK
    new Room('A18', 401, -273, 438, -236), //見直しOK
    new Room('A19', 223, -206, 260, -162), //見直しOK
    new Room('A20', 301, -202, 338, -166), //見直しOK
    new Room('A21', 359, -214, 395, -178), //見直しOK

    new Room('B1', -394, 169, -357, 206), //見直しOK
    new Room('B2', -307, 162, -270, 206), //見直しOK
    new Room('B3', -242, 182, -205, 217), //見直しOK
    new Room('B4', -420, 225, -383, 262), //見直しOK
    new Room('B5', -374, 226, -338, 261), //見直しOK
    new Room('B6', -318, 225, -283, 262), //見直しOK
    new Room('B7', -254, 238, -217, 274), //見直しOK
    new Room('B8', -201, 238, -157, 274), //見直しOK
    new Room('B9', -438, 281, -403, 318), //見直しOK
    new Room('B10', -384, 283, -350, 317), //見直しOK
    new Room('B11', -318, 278, -283, 321), //見直しOK
    new Room('B12', -253, 296, -217, 331), //見直しOK
    new Room('B13', -199, 291, -164, 336), //見直しOK
    new Room('B14', -428, 339, -392, 376), //見直しOK
    new Room('B15', -374, 340, -337, 376), //見直しOK
    new Room('B16', -318, 340, -282, 375), //見直しOK
    new Room('B17', -254, 352, -218, 387), //見直しOK
    new Room('B18', -198, 351, -163, 388), //見直しOK
    new Room('B19', -385, 396, -346, 431), //見直しOK
    new Room('B20', -339, 397, -302, 433), //見直しOK
    new Room('B21', -242, 407, -205, 444), //見直しOK

//    new Room('C1', -320, -327, -281, -288), //見直しOK
    //new Room('C2', -326, -246, -275, -195), //見直しOK

    //new Room('D1', 284, 288, 315, 317),
    //new Room('D2', 275, 349, 324, 398),
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
//layout01_50_101_150.addPassage('C1', 'C2');
//layout01_50_101_150.addPassage('D1', 'D2');

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
layout01_50_101_150.addAccursedHoard(234.53, -248.69);
layout01_50_101_150.addAccursedHoard(250.25, -248.37);
layout01_50_101_150.addAccursedHoard(250.55, -233.44);
layout01_50_101_150.addAccursedHoard(300.26, -242.39);
layout01_50_101_150.addAccursedHoard(302.66, -239.8);
layout01_50_101_150.addAccursedHoard(372, -247.4);
layout01_50_101_150.addAccursedHoard(419.81, -254.17);
layout01_50_101_150.addAccursedHoard(422.2, -251.71);
layout01_50_101_150.addAccursedHoard(244.03, -185.13);
layout01_50_101_150.addAccursedHoard(380.2, -192.89);
layout01_50_101_150.addAccursedHoard(-287.57, 183.84);
layout01_50_101_150.addAccursedHoard(-398.83, 242.94);
layout01_50_101_150.addAccursedHoard(-356.14, 243.66);
layout01_50_101_150.addAccursedHoard(-295.47, 248.96);
layout01_50_101_150.addAccursedHoard(-300.18, 245.37);
layout01_50_101_150.addAccursedHoard(-306.86, 248.06);
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


const layout51_80_151_180 = new Layout([
    new Room('A1', 225, -426, 262, -391), //見直しOK
    new Room('A2', 270, -431, 313, -397), //見直しOK
    new Room('A3', 361, -426, 407, -390), //見直しOK
    new Room('A4', 185, -362, 220, -327), //見直しOK
    new Room('A5', 237, -363, 274, -326), //見直しOK
    new Room('A6', 295, -375, 329, -340), //見直しOK
    new Room('A7', 351, -362, 386, -328), //見直しOK
    new Room('A8', 407, -380, 442, -334), //見直しOK
    new Room('A9', 170, -319, 205, -282), //見直しOK
    new Room('A10', 225, -305, 260, -270), //見直しOK
    new Room('A11', 281, -319, 318, -282), //見直しOK
    new Room('A12', 338, -307, 373, -270), //見直しOK
    new Room('A13', 397, -307, 442, -270), //見直しOK
    new Room('A14', 173, -251, 208, -215), //見直しOK
    new Room('A15', 225, -255, 261, -210), //見直しOK
    new Room('A16', 281, -262, 318, -225), //見直しOK
    new Room('A17', 340, -255, 374, -210), //見直しOK
    new Room('A18', 390, -250, 425, -215), //見直しOK
    new Room('A19', 214, -190, 249, -146), //見直しOK
    new Room('A20', 301, -206, 337, -170), //見直しOK
    new Room('A21', 349, -190, 386, -154), //見直しOK

    new Room('B1', -393, 170, -357, 206, true),
    new Room('B2', -307, 161, -270, 206), //見直しOK
    new Room('B3', -243, 181, -206, 217), //見直しOK
    new Room('B4', -419, 227, -383, 261, true),
    new Room('B5', -371, 225, -334, 262), //見直しOK
    new Room('B6', -319, 226, -282, 262), //見直しOK
    new Room('B7', -255, 239, -218, 273), //見直しOK
    new Room('B8', -203, 238, -160, 273), //見直しOK
    new Room('B9', -436, 281, -398, 317), //見直しOK
    new Room('B10', -383, 281, -346, 318), //見直しOK
    new Room('B11', -316, 277, -283, 320), //見直しOK
    new Room('B12', -253, 293, -217, 330), //見直しOK
    new Room('B13', -201, 290, -166, 332), //見直しOK
    new Room('B14', -423, 337, -389, 374), //見直しOK
    new Room('B15', -371, 337, -334, 375), //見直しOK
    new Room('B16', -317, 340, -282, 375), //見直しOK
    new Room('B17', -255, 345, -219, 389), //見直しOK
    new Room('B18', -204, 350, -167, 385), //見直しOK
    new Room('B19', -387, 396, -342, 429), //見直しOK
    new Room('B20', -298, 394, -263, 430), //見直しOK
    new Room('B21', -243, 410, -207, 446), //見直しOK

    new Room('C1', -319, -323, -282, -286), //見直しOK
    new Room('C2', -326, -247, -275, -195), //見直しOK
]);
layout51_80_151_180.addPassage('A1', 'A5');
layout51_80_151_180.addPassage('A2', 'A6');
layout51_80_151_180.addPassage('A3', 'A7');
layout51_80_151_180.addPassage('A5', 'A10');
layout51_80_151_180.addPassage('A6', 'A11');
layout51_80_151_180.addPassage('A7', 'A12');
layout51_80_151_180.addPassage('A10', 'A15');
layout51_80_151_180.addPassage('A11', 'A16');
layout51_80_151_180.addPassage('A12', 'A17');
layout51_80_151_180.addPassage('A15', 'A19');
layout51_80_151_180.addPassage('A16', 'A20');
layout51_80_151_180.addPassage('A17', 'A21');
layout51_80_151_180.addPassage('A4', 'A5');
layout51_80_151_180.addPassage('A5', 'A6');
layout51_80_151_180.addPassage('A6', 'A7');
layout51_80_151_180.addPassage('A7', 'A8');
layout51_80_151_180.addPassage('A9', 'A10');
layout51_80_151_180.addPassage('A10', 'A11');
layout51_80_151_180.addPassage('A11', 'A12');
layout51_80_151_180.addPassage('A12', 'A13');
layout51_80_151_180.addPassage('A14', 'A15');
layout51_80_151_180.addPassage('A15', 'A16');
layout51_80_151_180.addPassage('A16', 'A17');
layout51_80_151_180.addPassage('A17', 'A18');
layout51_80_151_180.addPassage('B1', 'B5');
layout51_80_151_180.addPassage('B2', 'B6');
layout51_80_151_180.addPassage('B3', 'B7');
layout51_80_151_180.addPassage('B5', 'B10');
layout51_80_151_180.addPassage('B6', 'B11');
layout51_80_151_180.addPassage('B7', 'B12');
layout51_80_151_180.addPassage('B10', 'B15');
layout51_80_151_180.addPassage('B11', 'B16');
layout51_80_151_180.addPassage('B12', 'B17');
layout51_80_151_180.addPassage('B15', 'B19');
layout51_80_151_180.addPassage('B16', 'B20');
layout51_80_151_180.addPassage('B17', 'B21');
layout51_80_151_180.addPassage('B4', 'B5');
layout51_80_151_180.addPassage('B5', 'B6');
layout51_80_151_180.addPassage('B6', 'B7');
layout51_80_151_180.addPassage('B7', 'B8');
layout51_80_151_180.addPassage('B9', 'B10');
layout51_80_151_180.addPassage('B10', 'B11');
layout51_80_151_180.addPassage('B11', 'B12');
layout51_80_151_180.addPassage('B12', 'B13');
layout51_80_151_180.addPassage('B14', 'B15');
layout51_80_151_180.addPassage('B15', 'B16');
layout51_80_151_180.addPassage('B16', 'B17');
layout51_80_151_180.addPassage('B17', 'B18');
layout51_80_151_180.addPassage('C1', 'C2');

const layout81_100_181_200 = new Layout([
    new Room('A1', 230, -416, 253, -385), //見直しOK
    new Room('A2', 270, -434, 310, -398), //見直しOK
    new Room('A3', 361, -426, 407, -390, true),
    new Room('A4', 177, -362, 219, -330), //見直しOK
    new Room('A5', 237, -363, 274, -330), //見直しOK
    new Room('A6', 295, -375, 329, -340), //見直しOK
    new Room('A7', 349, -363, 388, -330), //見直しOK
    new Room('A8', 407, -373, 443, -343), //見直しOK
    new Room('A9', 171, -313, 202, -288), //見直しOK
    new Room('A10', 223, -305, 261, -270), //見直しOK
    new Room('A11', 283, -320, 318, -283), //見直しOK
    new Room('A12', 350, -316, 386, -283), //見直しOK
    new Room('A13', 407, -324, 440, -301), //見直しOK
    new Room('A14', 161, -249, 198, -208), //見直しOK
    new Room('A15', 220, -255, 260, -221), //見直しOK
    new Room('A16', 283, -257, 319, -220), //見直しOK
    new Room('A17', 350, -269, 387, -231), //見直しOK
    new Room('A18', 405, -269, 444, -233), //見直しOK
    new Room('A19', 219, -205, 260, -164), //見直しOK
    new Room('A20', 301, -200, 342, -160), //見直しOK
    new Room('A21', 360, -215, 398, -174), //見直しOK

    new Room('B1', -398, 165, -365, 202), //見直しOK
    new Room('B2', -307, 182, -270, 206), //見直しOK
    new Room('B3', -243, 181, -206, 217, true),
    new Room('B4', -419, 222, -396, 260), //見直しOK
    new Room('B5', -376, 222, -343, 262), //見直しOK
    new Room('B6', -317, 227, -283, 262), //見直しOK
    new Room('B7', -250, 235, -219, 271), //見直しOK
    new Room('B8', -198, 234, -164, 271), //見直しOK
    new Room('B9', -443, 284, -406, 318), //見直しOK
    new Room('B10', -387, 283, -351, 318), //見直しOK
    new Room('B11', -319, 280, -283, 320), //見直しOK
    new Room('B12', -253, 293, -216, 330), //見直しOK
    new Room('B13', -202, 295, -165, 328), //見直しOK
    new Room('B14', -435, 337, -395, 378), //見直しOK
    new Room('B15', -375, 338, -344, 374), //見直しOK
    new Room('B16', -316, 336, -285, 372), //見直しOK
    new Room('B17', -249, 347, -217, 384), //見直しOK
    new Room('B18', -200, 350, -165, 386), //見直しOK
    new Room('B19', -389, 396, -353, 434), //見直しOK
    new Room('B20', -339, 395, -302, 432), //見直しOK
    new Room('B21', -240, 405, -207, 430), //見直しOK

    new Room('C1', -318, -318, -284, -282), //見直しOK
    new Room('C2', -326, -261, -275, -211), //見直しOK

    new Room('D1', 284, 173, 311, 200), //見直しOK
    new Room('D2', 275, 272, 324, 324), //見直しOK
]);
layout81_100_181_200.addPassage('A1', 'A5');
layout81_100_181_200.addPassage('A2', 'A6');
layout81_100_181_200.addPassage('A3', 'A7');
layout81_100_181_200.addPassage('A5', 'A10');
layout81_100_181_200.addPassage('A6', 'A11');
layout81_100_181_200.addPassage('A7', 'A12');
//layout81_100_181_200.addPassage('A10', 'A15');
layout81_100_181_200.addPassage('A11', 'A16');
layout81_100_181_200.addPassage('A12', 'A17');
layout81_100_181_200.addPassage('A15', 'A19');
layout81_100_181_200.addPassage('A16', 'A20');
layout81_100_181_200.addPassage('A17', 'A21');
layout81_100_181_200.addPassage('A4', 'A5');
layout81_100_181_200.addPassage('A5', 'A6');
layout81_100_181_200.addPassage('A6', 'A7');
layout81_100_181_200.addPassage('A7', 'A8');
layout81_100_181_200.addPassage('A9', 'A10');
layout81_100_181_200.addPassage('A10', 'A11');
layout81_100_181_200.addPassage('A11', 'A12');
layout81_100_181_200.addPassage('A12', 'A13');
layout81_100_181_200.addPassage('A14', 'A15');
layout81_100_181_200.addPassage('A15', 'A16');
layout81_100_181_200.addPassage('A16', 'A17');
layout81_100_181_200.addPassage('A17', 'A18');
layout81_100_181_200.addPassage('B1', 'B5');
layout81_100_181_200.addPassage('B2', 'B6');
layout81_100_181_200.addPassage('B3', 'B7');
layout81_100_181_200.addPassage('B5', 'B10');
layout81_100_181_200.addPassage('B6', 'B11');
layout81_100_181_200.addPassage('B7', 'B12');
layout81_100_181_200.addPassage('B10', 'B15');
layout81_100_181_200.addPassage('B11', 'B16');
layout81_100_181_200.addPassage('B12', 'B17');
layout81_100_181_200.addPassage('B15', 'B19');
layout81_100_181_200.addPassage('B16', 'B20');
layout81_100_181_200.addPassage('B17', 'B21');
layout81_100_181_200.addPassage('B4', 'B5');
layout81_100_181_200.addPassage('B5', 'B6');
layout81_100_181_200.addPassage('B6', 'B7');
layout81_100_181_200.addPassage('B7', 'B8');
layout81_100_181_200.addPassage('B9', 'B10');
layout81_100_181_200.addPassage('B10', 'B11');
layout81_100_181_200.addPassage('B11', 'B12');
layout81_100_181_200.addPassage('B12', 'B13');
layout81_100_181_200.addPassage('B14', 'B15');
//layout81_100_181_200.addPassage('B15', 'B16');
//layout81_100_181_200.addPassage('B16', 'B17');
layout81_100_181_200.addPassage('B17', 'B18');
layout81_100_181_200.addPassage('C1', 'C2');
layout81_100_181_200.addPassage('D1', 'D2');

const layoutExit = new Layout([
    new Room('Exit B10', -123, 81, -78, 118),
    new Room('Exit B20', 85, 84, 115, 115),
    new Room('Exit B30', -115, -116, -85, -85),
    new Room('Exit B40', 82, -116, 117, -83),
    new Room('Exit B50', 82, -18, 117, 17),
    new Room('Exit B60', -215, -216, -185, -185),
    new Room('Exit B70', -215, -116, -185, -85),
    new Room('Exit B80', -215, -16, -185, 15),
    new Room('Exit B90', -315, -16, -283, 15),

    new Room('Exit B110', -315, -216, -283, -185),
    new Room('Exit B120', -217, 135, -183, 165),
    new Room('Exit B130', -217, 235, -183, 265),
    new Room('Exit B140', -315, 235, -283, 265),
    new Room('Exit B150', -315, 135, -283, 165),
    new Room('Exit B160', -415, -216, -383, -185),
    new Room('Exit B170', -415, -116, -383, -85),
]);

class Zone {
    constructor(id, baseFloorNumber, layout, patrolMobNameIDs, bossFloorLayout=new BossFloorLayout([])) {
        this.id = id;
        this.baseFloorNumber = baseFloorNumber
        this.layout = layout.concat(bossFloorLayout);
        this.patrolMobNameIDs = patrolMobNameIDs;
    }
    get inDD() {
        return this.baseFloorNumber >= 0;
    }
    get title() {
        if (!this.inDD) {
            return `死者の宮殿の外(Zone:${this.id})`;
        }
        //let header = '死者の宮殿'
        //if (this.baseFloorNumber>0) {
        //    header += ` B${this.baseFloorNumber}-B${this.baseFloorNumber+9}`;
        //}
        let header = '';
        return header;        
    }

    getCurrentRoomName(self) {
        const currentRoom = this.layout.rooms.find(r => r.containsPos(self));
        return currentRoom ? currentRoom.name : '';
    }

    isDangerMob(bnpcNameID) {
        return this.patrolMobNameIDs.includes(bnpcNameID);
    }

}

class DDUtility {
    // モブ名⇒ID https://xivapi.com/search?indexes=BnpcName&string_column=Name_ja&string_algo=term&columns=ID,Name_ja&string=%E3%83%87%E3%82%A3%E3%83%BC%E3%83%97%E3%83%91%E3%83%AC%E3%82%B9%E3%83%BB%E3%82%AD%E3%83%BC%E3%83%91%E3%83%BC
    static getZone(zoneID) {
        const zoneMap = {
            561: new Zone(561, 1, layout01_50_101_150, [ //B1 - B10
                4983, //パレス・ジズ
                4984, //ロストゴブリン
                4985, //パレス・ダングビートル
            ], new BossFloorLayout([
                new Room('Exit B10', -320, -327, -281, -288),
                new Room('Boss B10', -326, -246, -275, -195),
            ])), 
            562: new Zone(562, 11, layout01_50_101_150, [ //B11 - B20
                4996, //パレス・プリン
                4997, //パレス・コブラ
                4998, //パレス・ビロコ
            ], new BossFloorLayout([
                new Room('Exit B20', -317, -314, -284, -284),
                new Room('Boss B20', -325, -259, -276, -211),
            
            ])), 
            563: new Zone(563, 21, layout01_50_101_150, [ //B21 - B30
                5009, //パレス・デュラハン
                5010, //パレス・ミノタウロス
                5011, //パレス・スカネテ
            ], new BossFloorLayout([
                new Room('Exit B30', -317, -317, -284, -287),
                new Room('Boss B30', -326, -261, -275, -213),

            ])), 
            564: new Zone(564, 31, layout01_50_101_150, [ //B31 - B40
                5022, //ナイトメア・サキュバス
                5023, //ナイトメア・カトブレパス
                5024, //パレス・グルマン
            ], new BossFloorLayout([
                new Room('Exit B40', -317, -313, -284, -281),
                new Room('Boss B40', -326, -250, -275, -202),
            
            ])), 
            565: new Zone(565, 41, layout01_50_101_150, [ //B41 - B50
                5035, //パレス・マンティコア
                5036, //ナイトメア・レイス  5354パレス・レイス
                5355, //パレス・グレイブキーパー
            ], new BossFloorLayout([
                new Room('Exit B50', 284, 288, 315, 317),
                new Room('Boss B50', 275, 349, 324, 398),
            
            ])), 
            593: new Zone(593, 51, layout51_80_151_180, [ //B51 - B60
                5302, //パレス・アヌビス
                5307, //パレス・マナアイドル
                5305, //パレス・アークデーモン
            ], new BossFloorLayout([
                new Room('Exit B60', -320, -327, -281, -288),
                new Room('Boss B60', -326, -246, -275, -195),
            
            ])), 
            594: new Zone(594, 61, layout51_80_151_180, [ //B61 - B70
                5317, //パレス・エルブスト
                5319, //パレス・ブレードビネガロン
                5316, //パレス・ミロドン
            ], new BossFloorLayout([
                new Room('Exit B70', -320, -327, -281, -288),
                new Room('Boss B70', -326, -246, -275, -195),
            
            ])), 
            595: new Zone(595, 71, layout51_80_151_180, [ //B71 - B80
                5331, //パレス・アンズー
                5325, //パレス・サイクロプス
                5324, //バード・オブ・パレス
            ], new BossFloorLayout([
                new Room('Exit B80', -320, -327, -281, -288),
                new Room('Boss B80', -326, -246, -275, -195),
            
            ])), 
            596: new Zone(596, 81, layout81_100_181_200, [ //B81 - B90
                5343, //パレス・ワモーラ
                5342, //パレス・ハパリット
                5344, //パレス・キマイラ
            ], new BossFloorLayout([
                new Room('Exit B90', -317, -313, -284, -281),
                new Room('Boss B90', -326, -261, -275, -211),
            
            ])), 
            597: new Zone(597, 91, layout81_100_181_200, [ //B91 - B100
                5354, //パレス・レイス
                5353, //パレス・アイアンコース
                5355, //パレス・グレイブキーパー
            ], new BossFloorLayout([
                new Room('Exit B100', -320, -327, -281, -288),
                new Room('Boss B100', -326, -246, -280, -195),
            
            ])), 
            598: new Zone(598, 101, layout01_50_101_150, [ //B101 - B110
                5368, //ディープパレス・ジズ
                5369, //ゴブリン・アドベンチャラー
                5370, //ディープパレス・ダングビートル
            ], new BossFloorLayout([
                new Room('Exit B110', -317, -317, -284, -287),
                new Room('Boss B110', -326, -261, -275, -213),
            
            ])), 
            599: new Zone(599, 111, layout01_50_101_150, [ //B111 - B120
                5374, //ディープパレス・ギガントード
                5382, //ディープパレス・コブラ
                5383, //ディープパレス・ビロコ
            ], new BossFloorLayout([
                new Room('Exit B120', -316, -312, -285, -285),
                new Room('Boss B120', -326, -262, -275, -211),
            
            ])), 
            600: new Zone(600, 121, layout01_50_101_150, [ //B121 - B130
                5394, //ディープパレス・デュラハン
                5395, //ディープパレス・ミノタウルス
                5396, //ディープパレス・スカネテ
            ], new BossFloorLayout([
                new Room('Exit B130', -316, -312, -285, -285),
                new Room('Boss B130', -326, -262, -275, -211),
            
            ])), 
            601: new Zone(601, 131, layout01_50_101_150, [ //B131 - B140
                5409, //ディープパレス・グルマン
                5402, //ディープパレス・アーリマン
                5408, //ディープパレス・カトブレパス
            ], new BossFloorLayout([
                new Room('Exit B140', -316, -317, -285, -285),
                new Room('Boss B140', -326, -262, -275, -213),
            
            ])), 
            602: new Zone(602, 141, layout01_50_101_150, [ //B141 - B150
                5421, //ディープパレス・マンティコア
                5422, //ディープパレス・レイス
                5423, //ディープパレス・キーパー
            ], new BossFloorLayout([
                new Room('Exit B150', -316, -317, -285, -285),
                new Room('Boss B150', -326, -262, -275, -211),
            ])), 
            603: new Zone(603, 151, layout51_80_151_180, [ //B151 - B160
                5432, //ディープパレス・シュワブチ
                5436, //ディープパレス・マロリス
                5434, //ディープパレス・アークデーモン
            ], new BossFloorLayout([
                new Room('Exit B160', -309, -364, -292, -349),
                new Room('Boss B160', -326, -325, -275, -275),
            
            ])), 
            604: new Zone(604, 161, layout51_80_151_180, [ //B161 - B170
                5445, //ディープパレス・トゥルスス
                5447, //ディープパレス・ビネガロン
                5448, //ディープパレス・プテラノドン
            ], new BossFloorLayout([
                new Room('Exit B170', -309, -364, -292, -349),
                new Room('Boss B170', -326, -325, -275, -275),
            
            ])), 
            605: new Zone(605, 171, layout51_80_151_180, [ //B171 - B180
                5453, //ディープパレス・スノウクロプス
                5451, //ディープパレス・ウィセント
                5452, //バード・オブ・ディープパレス
            ], new BossFloorLayout([
                new Room('Exit B180', -316, -317, -285, -285, true),
                new Room('Boss B180', -326, -262, -275, -211, true),
            
            ])), 
            606: new Zone(606, 181, layout81_100_181_200, [ //B181 - B190
                5469, //ディープパレス・ワモーラ
                5470, //ディープパレス・ガルム
                5468, //ディープパレス・ヴィンドスルス
            ], new BossFloorLayout([
                new Room('Exit B190', -316, -317, -285, -285, true),
                new Room('Boss B190', -326, -262, -275, -211, true),
            
            ])), 
            607: new Zone(607, 191, layout81_100_181_200, [ //B191 - B200
                5475, //ディープパレス・アイアンコース
                5473, //ディープパレス・ファハン
                5423, //ディープパレス・キーパー
            ], new BossFloorLayout([
                new Room('Exit B200', -316, -317, -285, -285, true),
                new Room('Boss B200', -326, -262, -275, -211, true),
            
            ])), 
            570: new Zone(570, 0, layoutExit, []) //Exit Area
        };
        return zoneMap[zoneID] ? zoneMap[zoneID] : new Zone(zoneID, -1, new Layout([]), []);
    }

    static isMimic(bnpcNameID) {
        return bnpcNameID == 2566; //ミミック
    }
    static isPygmaioi(bnpcNameID) {
        return bnpcNameID == 5041; //ピグマイオイ
    }
    static isSprite(bnpcNameID) { 
        return bnpcNameID == 5479 || bnpcNameID == 5480;
    }
}