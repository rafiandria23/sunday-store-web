'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'Products',
      [
        {
          name:
            'Cybertron BLU-Print Workstation,Intel Core-i9 9980XE 18-Core 3.0GHz,128GB DDR4 3200MHz, Dual Quadro RTX 6000 24GB,1TB Samsung 970 Pro NVMe M.2+(4)1TB Samsung 860 PRO Hotswappable SSD Raid 10,Win10 PRO',
          description: `From AutoCAD to Maya, SolidWorks, CATIA and more, a BLU-Print Professional Design Workstation will get the job done.  Designed for designers, BLU-Print systems have been configured to help you get the most out of your resources.  That’s why the heart of this system is a liquid-cooled Intel Core i9 9980XE 18 core 3.0 GHz CPU and Dual Quadro RTX 6000 24GB video cards. And that's backed by 128GB of fast and reliable DDR4 3200MHz memory, a 1TB Samsung 970 PRO NVMe M.2 SSD + (4) 1TB Samsung 860 PRO Hot-swappable SSDs in RAID 10. Rounding out the configuration is a Pro Chassis and both Wired and Wireless networking (802.11ac + BT 4.2). From start to finish, BLU-Print Professional Design Workstations lead the way! To be efficient and reliable, a workstation has to be built right. If the foundation isn’t solid, it doesn’t matter what else is in the box, it will collapse under pressure. Using only the highest quality components and precision assembly, this BLU-Print Professional Design Workstation is a system that will give dependable, reliable service day after day, year after year.`,
          image_url:
            'https://c1.neweggimages.com/ProductImageCompressAll1280/ABFSS200114CDbWW.jpg',
          price: 14598.49,
          stock: 100,
          createdAt: new Date(Date.now()),
          updatedAt: new Date(Date.now())
        },
        {
          name:
            'ABS Mage H - Intel i9-9900K - GeForce RTX 2080 Super - G.SKILL TridentZ RGB 16GB DDR4 - 1TB SSD - Liquid Cooling 240mm - Gaming Desktop PC',
          description:
            'The unlocked 9th gen Intel Core i9-9900K desktop processor offers the power of a maximum processor frequency of 5GHz with 8 cores and 16 threads. Built with Solder Thermal Interface Material (STIM) and the free Intel Extreme Tuning Utility (XTU), it lets you push your limits whenever you want, with full confidence.',
          image_url:
            'https://c1.neweggimages.com/NeweggImage/ProductImageCompressAll1280/83-102-800-S04.jpg',
          price: 1999.99,
          stock: 100,
          createdAt: new Date(Date.now()),
          updatedAt: new Date(Date.now())
        },
        {
          name:
            'ABS iCUE Crystal C - Intel i9-9900K - Strix GeForce RTX 2080 Ti - 32GB DDR4 3200MHz - 2TB NVMe SSD - Liquid Cooling (240mm) - Gaming Desktop PC - Black',
          description: `Intel Core i9-9900K Coffee Lake 8-Core 3.6GHz (5.0GHz Turbo),
            Asus ROG Strix GeForce RTX 2080 Ti 11GB GDDR6,
            Asus ROG Strix Z390-E Gaming,
            2TB M.2 NVMe SSD,
            Corsair Hydro Series H100i RGB PLATINUM 240mm Liquid Cooling System,
            Corsair Vengeance RGB Pro 32GB DDR4 3200MHz,
            Corsair Crystal Series 680X RGB Black,
            Corsair Lightning Node Pro expansion kit,
            Corsair RM750x 750W,
            Corsair RGB 3x LL120 RGB and 2x ML PRO 120mm,
            Corsair K95 RGB PLATINUM Cherry MX Speed Mechanical Gaming Keyboard,
            Corsair Gaming Mouse,
            Windows 10 Home 64-bit,
            VR Ready`,
          image_url:
            'https://c1.neweggimages.com/NeweggImage/ProductImageCompressAll1280/83-102-714-Z04.jpg',
          price: 3799.99,
          stock: 100,
          createdAt: new Date(Date.now()),
          updatedAt: new Date(Date.now())
        },
        {
          name:
            'ABS Prism S - Intel Core i9-9900K - GeForce RTX 2080 Super - 16GB DDR4 - 1TB SSD - Liquid Cooling (240 mm) - Gaming Desktop PC',
          description: `Intel Core i9 9th Gen 9900K (3.60GHz),
            NVIDIA GeForce RTX 2080 SUPER 8GB,
            16GB DDR4 3000MHz,
            1TB SSD,
            Windows 10 Home 64-bit,
            Rosewill RGB AIO 240mm CPU Liquid Cooler,
            Gaming Keyboard & Mouse,
            VR Ready`,
          image_url:
            'https://c1.neweggimages.com/NeweggImage/ProductImageCompressAll1280/83-102-881-Z04.jpg',
          price: 1999.99,
          stock: 100,
          createdAt: new Date(Date.now()),
          updatedAt: new Date(Date.now())
        },
        {
          name: `ASUS TUF Gaming Laptop - 15.6" 144 Hz FHD IPS-Type - AMD Ryzen 7 R7-3750H - GeForce RTX 2060 - 16 GB DDR4 - 512 GB PCIe SSD - Gigabit Wi-Fi 5 - Windows 10 Home - FX505DV-NH74`,
          description: `ASUS TUF Gaming FX505 will change the way you look at gaming laptops. It exceeds expectations, boasting impressive hardware and a compact, aggressively-designed chassis that's exceptionally tough. FX505 has a gaming desktop-inspired keyboard with RGB-backlit keys, a highlighted WASD key group, and Overstroke technology for fast and precise control. With a cutting-edge IPS-level NanoEdge display, and a MIL-STD-810G test certified durability, FX505 delivers an immersive gaming experience without breaking the bank!`,
          image_url:
            'https://c1.neweggimages.com/NeweggImage/ProductImageCompressAll1280/34-235-320-V13.jpg',
          price: 1099.99,
          stock: 100,
          createdAt: new Date(Date.now()),
          updatedAt: new Date(Date.now())
        },
        {
          name: `HIDevolution ASUS ROG Mothership GZ700GX 17.3” FHD 144Hz | 2.4 GHz i9-9980HK, RTX 2080, 64GB 2666MHz RAM, 6TB (3 x 2TB) PCIe SSD Raid 0 w/ Hyper Drive | Authorized Performance Upgrades & Warranty`,
          description: `9th Generation Intel Core i9 2.4 GHz 8 Core - 16 Thread Processor (i9-9980HK | Turbo to 5.0 GHz) with NVIDIA GeForce RTX 2080 w/ 8GB GDDR6,
          HIDevolution upgrades the 17.3" FHD 144Hz 3ms IPS-Level, 300-nits, 72% NTSC, 100% sRGB, 76% Adobe, G-Sync Anti-Glare Display Gaming Laptop by adding Gelid GC Extreme on CPU and GPU for improved performance and optimal system temperature,
          HIDevolution installed PCIe based storage--6TB (3 x 2TB) M.2 PCIe 3.0 x4 NVMe SSD Raid 0 w/ Hyper Drive--ensures that you experience the fastest boot up & load times,
          64GB (4 x 16GB) of fast DDR4 2666MHz memory--run memory hungry applications and multitask with ease
          HIDevolution Promise: Authorized ASUS Build to Order Seller, thorough quality testing, a 1 Year Warranty, and access to our expert support staff.`,
          image_url:
            'https://c1.neweggimages.com/ProductImageCompressAll1280/AFXN_1_201909261718070177.jpg',
          price: 8069.00,
          stock: 100,
          createdAt: new Date(Date.now()),
          updatedAt: new Date(Date.now())
        },
        {
          name:
            'ASUS - Gaming Laptop - 15.6" 144 Hz IPS-type - Intel Core i7-8750H - NVIDIA GeForce RTX 2070 - 16 GB RAM - 512 GB SSD - RGB Keyboard - Windows 10 - ROG Strix Scar II (GL504GW-DS74)',
          description: `With up to the latest NVIDIA® GeForce RTX™ 2070 graphics and 8th Generation Intel® Core™ i7 processors, ROG Strix SCAR II brings even more power and style to FPS esports gaming. Available in 15- and 17-inch models, Strix SCAR II boasts the world’s first 144Hz super-narrow-bezel display with an ultrafast 3ms gray-to-gray (GTG) response time for unmatched smoothness and response. For an added edge in the heat of battle, this powerful Windows 10 gaming laptop features the exclusive HyperCool Pro cooling system that allows you to fully unleash the potential of its high-performance CPU and GPU, while ROG RangeBoost technology uses multi-antenna Wi-Fi to provide up to 30% more1 range, higher throughput and fewer dropped connections. In addition, the all-new Armoury Crate utility offers one-click access to system settings and Aura lighting effects. Strix SCAR II offers an unstoppable combination of high-performance graphics and ultrafast display in a compact design!`,
          image_url:
            'https://c1.neweggimages.com/ProductImageCompressAll1280/34-235-123-V51.jpg',
          price: 1999.99,
          stock: 100,
          createdAt: new Date(Date.now()),
          updatedAt: new Date(Date.now())
        },
        {
          name:
            'MSI GP Series GP65 Leopard 9SF-240 15.6" 144 Hz IPS Intel Core i7 9th Gen 9750H (2.60 GHz) NVIDIA GeForce RTX 2070 16 GB Memory 512 GB NVMe SSD Windows 10 Home 64-bit Gaming Laptop',
          description: `GeForce RTX 2070 8 GB GDDR6,
            Intel Core i7 9th Gen 9750H (2.60 GHz),
            16 GB Memory 512 GB NVMe SSD,
            15.6" 1920 x 1080 IPS-Level 144 Hz 3 ms 72% NTSC, 100% sRGB,
            14.08" x 9.76" x 1.08" 5.07 lbs,
            1 x Mini DisplayPort 1 x HDMI (4K @ 60Hz),
            1 x USB 3.2 Gen 2 Type-C,
            2 x USB 3.2 Gen 1 Type-A,
            1 x USB 3.2 Gen 2 Type-A`,
          image_url:
            'https://c1.neweggimages.com/NeweggImage/ProductImageCompressAll1280/34-155-295-V25.jpg',
          price: 1499.0,
          stock: 100,
          createdAt: new Date(Date.now()),
          updatedAt: new Date(Date.now())
        },
        {
          name:
            'ASUS ROG Zephyrus S GX701 Gaming and Entertainment Laptop (Intel i7-9750H 6-Core, 16GB RAM, 1TB PCIe SSD, 17.3" Full HD (1920x1080), NVIDIA RTX 2070, Wifi, Bluetooth, Webcam, 3xUSB 3.1, Win 10 Pro)',
          description: `We sell computers with custom/upgraded configurations to enhance system performance. If the computer has modifications as listed above, then the manufacturer box was opened by our highly skilled technicians for testing and inspection and to install the upgrades according to the specifications as advertised. Both the computers and components are brand new for the upgraded system.
          \nASUS ROG Zephyrus S GX701 GX701GW-DB76 Matte Black Color Gaming and Entertainment Laptop`,
          image_url:
            'https://c1.neweggimages.com/ProductImageCompressAll1280/V0F3_1_20190608159408123.jpg',
          price: 2702.49,
          stock: 100,
          createdAt: new Date(Date.now()),
          updatedAt: new Date(Date.now())
        },
        {
          name: `ASUS G21CX-XB981 Gaming Desktop PC Intel Core i9-9900K (3.6 GHz) - NVIDIA GeForce RTX 2080 (8 GB), 32GB DDR4, 1TB SSD, Windows 10 Pro 64-bit`,
          description: `Intel Core i9-9900K Processor, 3.6GHZ (16M Cache, up to 5 GHz),
            NVIDIA GeForce RTX 2080 8GB,
            Intel Z390 Chipset,
            32 GB DDR4 Memory,
            1TB M.2 SSD,
            Front: 1 x USB 3.1 Gen 1 (Type C), 2 x USB 3.1 Gen 2 (Type A),
            Rear: 4 x USB 3.1 Gen 1, 2 x USB 3.1 Gen 2 (Type A),
            Windows 10 Pro 64-bit,
            ROG Strix Flare Keyboard and ROG Gladius II Mouse`,
          image_url: `https://c1.neweggimages.com/NeweggImage/ProductImageCompressAll1280/A6ZP_1_20191120854309209.jpg`,
          price: 2799.99,
          stock: 100,
          createdAt: new Date(Date.now()),
          updatedAt: new Date(Date.now())
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Products', null, {});
  }
};
