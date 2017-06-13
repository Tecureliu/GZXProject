import React, { Component } from 'react';
import {Link} from 'react-router'
import './text.scss'

export default class Banner extends Component {
  constructor(props) {
    super(props);
    this.state={
      step:1,
      startX:0,
      changeX:0,
      startLeft:0
    }
    this.autoPlay = this.autoPlay.bind(this);
    this.carouselStop = this.carouselStop.bind(this);
    this.carouselStart = this.carouselStart.bind(this);
    this.carouselMove = this.carouselMove.bind(this);
  }
  componentWillUnmount() {
    window.clearInterval(window.textTimer);
    window.textTimer = null;
  }
  componentDidMount() {
    document.getElementById('bannerInner_text').style.top = -document.getElementsByClassName('imgBox_text')[0].offsetHeight + "px";
    const num = (this.props.newsList.length+2)*100+"%";
    document.getElementById('bannerInner_text').style.Height = num;
    const arryImg = document.getElementsByClassName('imgBox_text');
    for(let i = 0;i<arryImg.length;i++){
      arryImg[i].style.Height = 100/(this.props.newsList.length+2)+"%";
    }
    window.textTimer = null;
    window.textTimer = window.setInterval(this.autoPlay, this.props.delay);
  }
  
  autoPlay(){
    let step = this.state.step,count = this.props.newsList.length + 1;
    if (step >= (count - 1)) {
        step = 0;
        document.getElementById('bannerInner_text').style.top = 0;
    }
    step++;
    this.setState({step:step},function(){
      this.focusTip();
    });
    this.animate({top: -step * document.getElementsByClassName('imgBox_text')[0].offsetHeight}, 500);
  }
  focusTip(){
    let currenStep = this.state.step;
    let tipNum = document.getElementsByClassName('bannerTip')[0].getElementsByTagName("li").length;
    for (let i = 0; i < tipNum; i++) {
        document.getElementsByClassName('bannerTip')[0].getElementsByTagName("li")[i].className = i === (currenStep-1) ? "bg" : "";
    }

  }
  animate(obj, delay) {
        let times = 0;
        let interval = 50;
        let oChange = {};
        let oBegin = {};
        let flag = 0;
        for (let attr in obj) {
            let target = obj[attr];
            let begin = parseFloat(getComputedStyle(document.getElementById('bannerInner_text'))[attr]);
            let change = target - begin;
            if (change) {
                oBegin[attr] = begin;
                oChange[attr] = change;
                flag++;
            }
        }
        if (flag == 0) {
            return;
        }
        window.clearInterval(document.getElementById('bannerInner_text').timer);
        function step() { 
            times += interval;
            if (times < delay) {
                for (let attr in oChange) {
                    let value = times / delay * oChange[attr] + oBegin[attr];
                    document.getElementById('bannerInner_text')['style'][attr] = value + "px";
                }
            }
            else {
                for (let attr in oChange) {
                  document.getElementById('bannerInner_text')['style'][attr] = obj[attr] + "px";
                }
                window.clearInterval(document.getElementById('bannerInner_text').timer);
                document.getElementById('bannerInner_text').timer = null;
            }
        }
        document.getElementById('bannerInner_text').timer = window.setInterval(step, interval);
    }
  carouselStop(e){
    window.clearInterval(window.textTimer);
    let startX = e.touches[0].clientX;
    let startTop = parseFloat(document.getElementById('bannerInner_text').style.top);
    this.setState({
      startX:startX,
      startTop:startTop
    });
  }
  carouselStart(){
    window.textTimer = null;
    window.textTimer = window.setInterval(this.autoPlay, this.props.delay);
    if(this.state.changeX>(document.getElementsByClassName('imgBox_text')[0].offsetHeight/5)){
      let step = this.state.step,count = this.props.newsList.length + 2;
      if (step <= 1) {
          step = count-1;
          document.getElementById('bannerInner_text').style.top = -step * document.getElementsByClassName('imgBox_text')[0].offsetHeight + "px";
      }
      step--;
      this.setState({step:step},function(){
        this.focusTip();
      });
      this.animate({top: -step * document.getElementsByClassName('imgBox_text')[0].offsetHeight}, 400);
    }else if(this.state.changeX<-(document.getElementsByClassName('imgBox_text')[0].offsetHeight/5)){
      this.autoPlay();
    }else{
      this.animate({top: -this.state.step * document.getElementsByClassName('imgBox_text')[0].offsetHeight}, 150);

    }
  }
  carouselMove(e){
    let changeX = e.touches[0].clientX - this.state.startX;
    this.setState({changeX:changeX});
    document.getElementById('bannerInner_text')['style']['top'] = this.state.startTop + changeX + "px";
  }
  render() {
    // if(!!this.isFetch){
    //  return;
    // }
    const bannerList = this.props.newsList;
    return (
      <div className="banner_text" id="banner_text">
        <div className="bannerInner_text" id="bannerInner_text" onTouchMove={this.carouselMove} onTouchStart={this.carouselStop} onTouchEnd={this.carouselStart}>
          {/*把第最后一张图片复制一张放最后，实现手动滑动的无缝滚动*/
            bannerList.map(function(item,index){
              if(index == bannerList.length-1){
              return <a className="imgBox_text"><p>{item.news}</p></a>
              }
            })
          }
          {
            bannerList.map(function(item,index){
              return <Link to={item.route}><a className="imgBox_text"><p>{item.news}</p></a></Link>
            })
          }
          {/*把第一张图片复制一张放最后，实现无缝滚动*/
            bannerList.map(function(item,index){
              if(index == 0){
              return <a className="imgBox_text"><p>{item.news}</p></a>
              }
            })
          }
        </div>
       
      </div>
    );
  }
};