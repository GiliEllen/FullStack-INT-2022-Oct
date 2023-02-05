var Post = /** @class */ (function () {
    function Post(name, BigPictureURL, smallPictureURL) {
        this.name = name;
        this.BigPictureURL = BigPictureURL;
        this.smallPictureURL = smallPictureURL;
        this.uid = uid();
    }
    return Post;
}());
var User = /** @class */ (function () {
    function User(name, pictureURL) {
        this.name = name;
        this.pictureURL = pictureURL;
    }
    return User;
}());
var posts = [];
var users = [
    {
        name: "dad",
        pictureURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4HqB6YPJCVPEwBJwQYjidklQcWa507EQqtA&usqp=CAU"
    },
    {
        name: "mom",
        pictureURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUUAAACbCAMAAADC6XmEAAAAh1BMVEUAAAD////Dw8MoKCjn5+ccHByTk5NDQ0P6+vrc3Nxzc3Ojo6Py8vKqqqr7+/vw8PDo6Og9PT25ubmtra0zMzNfX1+ysrLJycmLi4ubm5vBwcHW1tZVVVXh4eHMzMx5eXlMTEyEhIRnZ2cVFRVjY2MUFBRvb283NzcuLi5AQEAjIyMLCwtXV1fsbFbFAAASwklEQVR4nO1daUPjIBRUt9Xa1l5e9U51PVb3//++NUmbwJsZID22Xu/TrgUCA7wb2Nn5oR/6oa9Gv+K07S5+eLru7MapM912Nz84nSWA+E7Ztvv5sWk/DcXjbffzg9Pf0wX93j+UKPa33c3PRHplPm+7a5+JjhWKP/KlAbUVipfb7tmnIsUaR9vu2KeiPbUY37bds89EEsX7bffsM5FEsbftnn0mkiheNWmlnUCbGsFHIIliJ72N7mErTqPzk82NYtskUdwdpzZxKpvw6WyT49guaRRnqU20flDUKE4SWzgIADdytvTtF3ZbahRvElsIeInuNtr1D0QaxVS9+1w2kMwTPj0FUPyd1kJf1f9GRmQAxYukBk5k/fMNd/0DUQDFNBRmPygGURwmNTCR9fc23PUPRAEUd19SGhjK6qmq0hegEIopMvaXrv6FtWxLIRRTAoF3uvrRxjv/YahEcUjZ22FC/UB8+xv51koUJzvXBIZOgjfrpihJTek0TelL0ALFnRHB4TpavT2vzjb2/n/o/gehEsVLbsjFcegW5Q6oBfMdUZwSFOMa31FebLBDFZ5vFNKudjRjjKPHWPWrvFgeXCAofh9nRI3iG1OfY3km7SKPLxfGPyiWZsYtQbEbqf27KJUHXYlw+jbeRRdF5m2NKc69olT+L6LrxKbgC1GN4l+CYiycWrDFwilOUHzafO8/CtUoPhDW1g/HStqFflPYyzdYOdHL+xWoRLEAgjHGLFi5lOsF/yNZU3833vkwPT4fZO80/g/5BA6KFwTFsOZc1igcaATFuOWzOXr427ttlZZAZ3R7kW34cw6KLDofTmMs7J0yeZmgeJDWg4fx0/7x3u3t7eXR9PfJWlLVTnpWZbjarKhzUPxFGONNaFSvRYXSwLnCuinJFa9PE08udQ6PT6OqfoQeeuw0ylW2YrMhKlEsPYkEiUFI786KIlNVN56Xk52xAGKrl+RkV/S3mJbOcGjaHmzQInVRZIwxpK6UpndW/JuIplguxLXrAOm462dwtnxyfu5dGkzu849fm0Uptd921p1Np7Nu9rokQ3FRZIwxpHcXdee5ZQTFsGx8uaxLDqd/8jG7i2dZR/nsve5VNQdtf4tQ5/3p8eGgKtGadJcR6S6KJ2R/3eqq7WLrzBVzgmJwXqd1zyun+IMbvuifLjGanXuLld8vVDn2wXTtTBLFokMuioy5jV5l1TLNae7RJu7JwFfb7uAc8enxFLscD65aN5bOL7whv/TtgjNOFqN9dXkE87JpYtae2+EeaTGTVWfF73MLpRGKmdt5TwfxYDz0NxezCt7pxvF6nKPR6nvh/Rh7wVSGZ7O7u55vwQ4aelI8FH+TTmr/1sTF6hJryopPbikT4/Jikp0/7k9kp5TUWmgD7/u5A3LJx8dZ4O3cah0tTgF0B165ZmFgD0XGGGVs/q0wnRf5eQ1Q9Lzqdum8+XzKtSLvB51+TkQbnBc7ZIFH46uquHV75IP66g++UX6MhyKbbhlOHReTt+BCGIkdiHr+qEA1vPdboTImO7IfK1bgu44xRDae+YusWhX5IvBUSJPO2gTGEsXFDJJjgR1lgpQMZ8FAcC2K9PqZV4jErE2eAbfG/VbmS3rCFSTjtJsvxnzaTazX6MsN4uk+imYhFKQcXOXqe/H+5xI/HHwaLTM2k8EVcOuJy8Huc9vdTHAJXR68hNU2xDbTyEfxmTBGFZwv/A9Vpmciis9+GeoyMk21qN5p9/SkkI3Uq2yWWKv44ztT7AM3MSw0/ZC4jyJzzQi9e9yZd74kzDShiXv+bPepnWDT7SmDsvGNYYEWnRWbcXAwr4529dgIruQ9bVAkjHHETaJy81d6UBqKhucJM8/qngwbCJ+P82oZa87qb/nmGvLsfytdU91LBsWnXSTatTneFetAFElat1kVA94ycmfiNYeUluydVQ6pzWHdA1dlbaYIW39M6mI0KD4TZYzr8cW01ZwDF3ELqrz6OoeMjb1Z25ZoWzDd1499wXxsWG5QmEFEJ8Jlm8oZDYqMMVI1vpRDNctKQdHuVGkWgTqIEg78Tx0woRcEwc3soSPKgnRNjGNaFAljpHp3OWv7gXrAd+zy6Us3Lhzn6oAGw+K+IgJu1O732cungKsxdhckZlVbFLvYNzra0nFRWxawfBB8G7IOON0gug15VwBNTtyldWC51PBdtrS44LDiBTcUJYviM+kds8JKtliLb3QHWRRBqgY8+LiybR8Amhwd7tAas7CEWGRggqUFLyyKbyQ8T/Tul6EBKroWH60rT0nonNDrbiXRH4LiIfcLMx+LSiKC6UtzkVkUWYI3UXtPbTVE0YwblmLwtCZiZBYjg0akW7LYpgpQwpZKuyoMUCS5xSOc41KxciQY7mgfxUfwzAc9eOiRNVyUQSNG3CZFWyK6AsNIu/ihRNHZs8/wxd1OxkfZccRODEWcnOBeIeFIvxMMGpHIAernrpZs8N1hkvkCKDLGCAMuM6PcPRlDETyXqLy4RMKRZu02SFIjRVWIEVAc6LiTQ4AiY4ywVUptzZVziKI33Rn8LFSNBWEnOn4FMtlqXkhRpfBjEmcW7OacgC/uzPCboPqVosJdohEU0cyOuJKjI0cja6C0EtJWJoriGYGk25kQRcIYIY2xsOU8dokoujC1kTVFzhSRHRFhEbt9tfmIVasARxST8lIQxTfCRqzOW4DiOW3CKJLgYmSO2cERby4RRckjsKjw9rGNmHSCDFFk4TwzIaX55alniKL7M4ltRRIQWLaLt6VRF5JKSYOiqEokpboQFMkyMGmMM4Q2iOIjLm9hrVXELob0OC2mEUi7HFGUx6HQjZAUmCYoEsZoPK7lavV8p0EUUULHz7sSC8+LKuKRZOl/waJygaGXOuk6T4IiOT9klLtiaQ093oIoOp8nh0Cih+OIYPXYM/IdaaxhUSkyMAi6LIqMMXoKbVasE5+3BFEkGTZR+5Qdfw+rtdK9j+ORzldEMSm4z1AkjNHbAncwpDCKzOaNKhAs88qdONRApTRFwGWkGZWJgBe0JobiGJryF145AD/aH0KRsMW4MjsjlVzGiE4kOTEIuPQaxl1ylPw8nTmh18kL4xQsq+/nLCCKNbNnR9CzWMdYNNK18fCD0r0BTsOONI7XiSJJRnQEchknNEI2hCLZnDL7pyJ6lZ4TWMFGJbODZTt8UEXXiSKRqY7GW64So0eFUCSTgtkdluhN4g7rQ9+ZTGGGvvGklZwQxZQrSDiKZB04ErecWjPzIRSJ0qK8pA4xFIPaU6ZaauB6xdDi8igSxugEwwrj3k9zDaL4wk4jxXvGjv44Q0IUJZOAvmntBVEMnptaEEcRFbxOtQXL8/kWhgCKLOiZMMMsWuIIOVTHZHgbNr/WpFdC0erAxGFf7eB72hFUPCoUWQA+QQujd/TUP8/gN2mZw7LVtjH2NeJNLomjSDS8irGXq846iwMoMp0l4T48ZgLu1irKKijqJCZEcSTluUMcRcKUKo5ceusyUyGAIo43KXODHimoFUZUQiWKsPm1zxBvclkFRWSMFUsqAAY3ZwBFdiFFAor0eEutzQCKOs7UICsDURymnGhzTva6pCOZ5ZoHKYcoVpyTWcQJXjt6a3CtXwGK2iABFPUZnvWiSFzN80+XKwv2BGbWBFFMSDmgKNbGyyoo6iPn60WR6LzzMuVGg+xWtPgrFHGZJqFIb4asbWVAkSeJ5wQoalfISigimyLBofKHQiFHAy6AIntbawMo6uECivq4K6KoJwf6iiiSbfhYfwZNKESxUmbWuRYDO7oBivogC0ExJTlCoahin2WPUOFCT2iF4n+SLtpRAyhm8qNrRpEwxkKiXNaAeoQoVmKcXaSwLIq1axhQ1Ird/0KRGJZoOhSwFGyRnCrD2EaFIgvQL6svZtXPq6xFHQtfN4q4D3O9uwwmEF8ColiZyiRVPCWyRm2XevpWWYvaRYwoagXKoRJFYtaSg5UnC2uO7EeUBRWKLM0hIbJG7ej65xmgKN0GgKK+IWUlFMmg3nAIdwv2RyIcyMUqOc6CVwl+eObTcc5cr4KivukHvRGroUjWwvHiPAjZEQEUWY7/kv5Fx1cM0GgUwZDX4YqVUGTuPnYOqAyGtAgHCmQUsSS0BK8d83U7sw3QaL64Goop95loFIlQeClFDhMNiGK93IiciCU77fC4i+OTxwxsiSIU1R9fCUXGph5wEPOtybLQEakaRXJLfzySSmOAjjPmk6CoX6hj6lYIRaYwZrGO0Xi04wQBTUyjCEU1MKhPNECRMnv10AM1WDHrt45vscBL9P4rdoWFe7kMoijtaDDktcBYCUUa2FSPjtDIE6JYy1N2G0X0Mm+2gN2zjSD8NIpQdEMo0qOX6l0wGrVAvcjJHCXiJXoKPubDgJ2iXVhQVKOITpgGKJIzajv8mY1dsRmDKBLfWNSQZo4xV9sH94c2eKGoRhH5SAMUhxRFzhj5qy8kc7v+kbjZosYLMwDd0YPhrtVjKKqBWQnFPlWCOWPk48d16+QxkByTaKIOUbo97g3GkkYRimpgMHbeAMUO1RL4O7I8sxxxclMe0T6MKYxMXfR4Kaj5AzlcKKqBQVOjAYoDvjIoY+RpgiiG3cTXGTYTuROdOYIytwBKLDlcKKqBwe3XAEVxhyxJk1ddCKN4gvszkthNFB1fkWiAImhh2o6ebQBFbFPeR0FUQvdn3NIRIU3OAfrKESqoEhsQVE1Q1IzCob1QuwckZ06MnggD92fkNxHfWPTgLhaQnBb0B+1fxC3QBEXRA8IYhdERQfEBWuqHr+TG5oxugKqVjKbAt/WnMaeoCYpZ8Nd4Dx4iKBJTJPhwCdEw/bQQvIdCRpnxyRWtH2C8sglfFM6BGTQqHvK1V4jl5GlPaE4Gj8ziaAw/fkXVSk0LHlr6I0quiqLIXMFkYhF2eiEo+lowGEJB6wWdvkamk5tg1EkNdIboSCpumSYoqhM3MI3inhByXMtILCihrxnb2XmDSbH3EJJgjhoDXmCUyQ+vhqJyVAFjFMyHmTmG+8BiDNwnh2zRqpfkhiw1hqwBiug3aYKielMIJL/qKUHR7Bt4aTqQZQKIgwOUHFxQY0Ansc52wpBdExQVq7c9UMyMvWxp+2p3C7ksdEEggCFvk/jP1RjQmNSOdnRjNUFROk0NY1TlkoIClsnKwcDKRplG7GzVN2QPOgsUTaYmKMp8QmO6KV7GXkCAvtqRyy1t9xXJriJhGTUG9HZpjkwub2+AorRqjTKvirFYE/bVzDT3DZNLBonngvg+1RhmUFLndaOZ0QRFmX3kb1V5NSY7GUQ0j360BGuMhcsQGjkGtOr0RXHEEZqC4qXuaEH+3XJyD7LsOqJ5GKVReCSM04sGmskhGiX5UAfUAUhyADIFxblrhIcMoF05iSy4wPo684vwFzNMO1QvSb2FmBbVvk30Wqag+CfasDfpskWGIm3SHxLdAoY38Zkj3iYVkEa5q1/cRK9lCooV9gPlwXcFq74EfEZQ5H31MSKL8TqlFRatVu4IlBjaEYJeyziKr+fxpl2PiM6AZZkMokGPRZBd6G8qRwl8PdtbEE8h6u9353Tn2ujI63RKATZMQ4sHRzXt+QZm/2zxw7HL0pxRaX7CTkyqGffkIDQ5k+MlQQRJbogRd6m+gQ0ZBUVR5DtYyuoazubRHiV2GkPOuAvHwHh2fDeWt53l62GMnNnBIWsLPhHFxE44LL1mjOINppyanZh0Sxs/gweVL1hUDhulrK6H/lxpYxDfL0UxbVu4VkWd2BDwq7KzfoEoX9dZcZ6cdiVBK/MrPUz3U8l9MLqNnkh5ToQ5VdgGfDtIIQ//ankEfPxsnYRuNRg7LL+G8c1lmYkPMUSJeMWljbHkMbEUqvZf4G4wtsTDZ1qm9eZZvGx470jIVtKtuimETlqpn9+zjPzdXnYyp1VeZK78NYEyLIsick/Ji/Mu8eHF/f2FwxKH07W8ae53vyb/UMfdeUl7SnyVjznmlHRJLaeF2AzdJMQO7UXPVz3Dw+3zD+0nXTWeSMSs8pIHaRq+IPVSZArN5yh0ppmpwQnnq9rdPSsVR5NgoLo5McGXOb8/sic3BCVdlyVozhgDDw+Qq2x3E18wez3d3zsc9fvv22Z0NZlep1y8ktDqrzk9dxlIV66W+nzXTaVlXuhe0NwFG0gJ4fpTunR7eB4fjF/Wxwsvhgui8uLdTjuflHR51vzN7eWovHDRz4r49WdcUab04fMnp1Tq23prIBYdlySyPdZPhSXqqaoZO+sYppvocau1EYvrSgqEItdLBYOewV8a0rrU6ATqHabSzVX2vzpVBEK8rzEfToy0b/R7UM4Yjba4Pzk76vUu9qez2d27jHvK6X5OxX+eund3d7PZdLp/0esdHZ9NoqetvjxdNnlM+YcEvU2zbXfhh37oh35oA/QP0VoIwSMsyMoAAAAASUVORK5CYII="
    },
    {
        name: "son",
        pictureURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDim2kq_9yyl5gxJEgCiqPV1Zh0OEUvmz07w&usqp=CAU"
    }
];
