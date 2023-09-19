import React from "react";
import Card from "./Card";

const Foodtrucks = () => {
    return (
        <div className="Foodtrucks">
            <div class="container">
                <Card imageSrc='https://pyxis.nymag.com/v1/imgs/38c/2ac/b02a093f6b846ebd1aca78b0d59c7e427a-birria-1.rsocial.w1200.jpg' name='Birria-Landia' type='Mexican' page='https://thebirrialandia.com/menu/'/>
                <Card imageSrc='https://res.cloudinary.com/the-infatuation/image/upload/c_fill,w_1200,ar_4:3,g_auto,f_auto/cms/reviews/mysttik-masala/banners/1561989798.42' name='Mysttik Masala' type='Indian' page='https://indianfoodny.com/' />
                <Card imageSrc='https://nypost.com/wp-content/uploads/sites/2/2014/08/081114featureshalaguysbz-1.jpg?quality=75&strip=all&w=1024' name='The Halal Guys' type='Middle Eastern' page='https://thehalalguys.com/menu/'/>
                <Card imageSrc='https://nydosas.com/wp-content/uploads/2018/07/maxresdefault-2-1024x630.jpg' name='NY Dosas' type='Vegetarian' page='https://nydosas.com/menu/'/>
                <Card imageSrc='https://infatuation.imgix.net/media/images/reviews/jerk-pan/banners/1561989308.8.jpg' name='Jerk Pan' type='Jamaican' page='https://www.allmenus.com/ny/new-york/360888-jerk-pan/menu/' />
                <Card imageSrc='https://static01.nyt.com/images/2019/09/04/dining/29hungry-tong2/merlin_159654336_783be212-7726-485e-9250-4793a743af41-jumbo.jpg' name='Tong' type='Bangladeshi' page='https://www.facebook.com/Bangladeshistreetfoods/'/>
                <Card imageSrc='https://kingsouvlakinyc.com/wp-content/themes/king/images/location-f.jpg' name='King Souvlaki of Astoria' type='Greek' page='https://kingsouvlakinyc.com/'/>
                <Card imageSrc='https://fastly.4sqi.net/img/general/600x600/61129566_7PLEKHNMZ-VNqzYx2jWRVZGrZ42PdPX0M-j9Ftpg8Ts.jpg' name="Ling's Sweet Mini Cakes" type='Chinese' page='https://canalstreet.market/' />
                <Card imageSrc='https://d3hbe0kmbam4a5.cloudfront.net/photos/67e1cdb7-bc27-4f26-8343-851bfaa7fc22.jpg' name="Uncle Gussy's" type='Greek' page='https://unclegussys.com/menus/' />
                <Card imageSrc='https://live.staticflickr.com/8088/8400188739_53b16c7d13_z.jpg' name='Patacon Pisao' type='Venezuelan' page='https://www.pataconpisaonyc.com/menus/' />
                <Card imageSrc='https://infatuation.imgix.net/media/images/reviews/moms-momo/banners/1606245507.888788.png' name="Mom's Mono" type='Tibetan' page='https://www.restaurantji.com/ny/jackson-heights/moms-momo-/menu/'/>
                <Card imageSrc='https://fastly.4sqi.net/img/general/600x600/784042_29bZZHPGisHnWqyIuuXMo8D2zzW7QS6Hft7Vv15SH_I.jpg' name='Makina Cafe' type='Ethiopian' page='https://makinacafenyc.com/'/>

            </div>
        </div>
    )
}
export default Foodtrucks; 