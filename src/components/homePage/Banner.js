/**
 * Created by zhaojuntong on 2018/1/25.
 */
import React, { Component } from 'react'
// import SvgIcon from 'components/svgIcon/SvgIcon'
import Shuiguo from 'svgIcon/shuiguo.svg'
import Zhuansong from 'svgIcon/zhuansong.svg'
import Meishi from 'svgIcon/meishi.svg'
import Chaoshi from 'svgIcon/chaoshi.svg'
import Paotui from 'svgIcon/paotui.svg'
import Xiawucha from 'svgIcon/xiawucha.svg'
import Hanbao from 'svgIcon/hanbao.svg'
import Lajiao from 'svgIcon/lajiao.svg'
import Kuaican from 'svgIcon/kuaican.svg'
import Yao from 'svgIcon/yao.svg'

import Fenmian from 'svgIcon/fenmian.svg'
import Pinpai from 'svgIcon/pinpai.svg'
import Shuiguo1 from 'svgIcon/shuiguo1.svg'
import Malatang from 'svgIcon/malatang.svg'
import Xianhua from 'svgIcon/xianhua.svg'
import Baozaifan from 'svgIcon/baozifan.svg'
import Zhaji from 'svgIcon/zhaji.svg'
import Shucai from 'svgIcon/shucai.svg'
import Yazi from 'svgIcon/yazi.svg'
import Fenlei from 'svgIcon/fenlei.svg'

import { orange800, blueA200, yellow800, amber400, deepOrangeA400, lightGreenA200, pink300, red700, deepPurple700, lightBlue300 } from 'material-ui/styles/colors'
// import { getStyle } from 'utils/index'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
/*
let start = {x: 0, y: 0} // 开始时的坐标
let end = {x:0, y: 0} // 移动时的坐标
let move = {x:0, y:0} // 移动的距离
let horizontalX = 0 // banner的translateX值*/
class Banner extends Component {
  /*componentDidMount () {
    this.banner()
  }
  banner () {
    const oBanner = this.refs.banner
    oBanner.addEventListener('touchstart', this.touch.bind(this))
    oBanner.addEventListener('touchmove', this.touch.bind(this))
    oBanner.addEventListener('touchend', this.touch.bind(this))
  }
  touch (e) { // touch事件
    const type = e.type

    switch(type){
      case 'touchstart':
        this.refs.banner.classList.remove('tran')
        start.x = e.changedTouches[0].pageX
        start.y = e.changedTouches[0].pageY
        horizontalX = getStyle(this.refs.banner, 'transform')
        break;
      case 'touchmove':
        end.x = e.changedTouches[0].pageX
        end.y = e.changedTouches[0].pageY
        move.x = end.x - start.x
        this.refs.banner.style.transform = `translateX(${move.x+horizontalX}px)`
        break;
      case 'touchend':
        this.refs.banner.classList.add('tran')
        horizontalX = getStyle(this.refs.banner, 'transform')
        if (move.x > 0 && move.x > 80 || horizontalX > 0) this.refs.banner.style.transform = `translateX(0px)`
        if (move.x < 0 && move.x < -80 || horizontalX < -parseFloat(getStyle(this.refs.banner, 'width'))/2) this.refs.banner.style.transform = `translateX(${-parseFloat(getStyle(this.refs.banner, 'width'))/2}px)`
        // horizontalX = getStyle(this.refs.banner, 'transform')
        // if (horizontalX < -parseFloat(getStyle(this.refs.banner, 'width'))/2) move.x = -parseFloat(getStyle(this.refs.banner, 'width'))/2
        // this.refs.banner.style.transform = `translateX(${move.x}px)`
        break;
    }
  }*/
  render () {
    const types = [
      {icon: Meishi, type: '美食', color: orange800},
      {icon: Chaoshi, type: '美团超市', color: blueA200},
      {icon: Shuiguo, type: '生鲜果蔬', color: yellow800},
      {icon: Zhuansong, type: '美团专送', color: amber400},
      {icon: Paotui, type: '跑腿代购', color: deepOrangeA400},
      {icon: Xiawucha, type: '午餐优选', color: lightGreenA200},
      {icon: Hanbao, type: '甜点饮品', color: pink300},
      {icon: Lajiao, type: '无辣不欢', color: red700},
      {icon: Kuaican, type: '快食简餐', color: deepPurple700},
      {icon: Yao, type: '送药上门', color: lightBlue300}
    ]
    const types1 = [
      {icon: Fenmian, type: '暖胃粉面', color: deepPurple700},
      {icon: Pinpai, type: '品牌连锁', color: blueA200},
      {icon: Shuiguo1, type: '家常菜', color: yellow800},
      {icon: Malatang, type: '麻辣烫冒菜', color: amber400},
      {icon: Xianhua, type: '鲜花蛋糕', color: lightGreenA200},
      {icon: Baozaifan, type: '煲仔饭', color: deepOrangeA400},
      {icon: Zhaji, type: '包子粥铺', color: pink300},
      {icon: Shucai, type: '香锅烤鱼', color: red700},
      {icon: Yazi, type: '小吃馆', color: orange800},
      {icon: Fenlei, type: '全部分类', color: lightBlue300}
    ]

    let settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div className="banner">
        <div className="banner-container" ref="banner">
          <Slider {...settings}>
            <ul>
              {types.map(item => (
                <li key={item.color}>
                  <div>
                    <div className="banner-svg-container" style={{background:item.color}}>
                      <svg className="svg-icon">
                        <use xlinkHref={`#icon-${item.icon}`}>

                        </use>
                      </svg>
                    </div>
                  </div>
                  <span>{item.type}</span>
                </li>
              ))}
            </ul>
            <ul>
              {types1.map(item => (
                <li key={item.color}>
                  <div>
                    <div className="banner-svg-container" style={{background:item.color}}>
                      <svg className="svg-icon">
                        <use xlinkHref={`#icon-${item.icon}`}>

                        </use>
                      </svg>
                    </div>
                  </div>
                  <span>{item.type}</span>
                </li>
              ))}
            </ul>
          </Slider>
        </div>
      </div>
    )
  }
}

export default Banner