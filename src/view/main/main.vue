<template>
  <div class="hello">
    
    <swiper loop auto :list="swiperdate"></swiper>

    <flexbox>
      <flexbox-item>
        <router-link to="/">
          <div><i class="fa fa-home" style="background:#ff8aad"></i></div>
          <span>校园新闻</span>
        </router-link>
      </flexbox-item>
      <flexbox-item>
        <router-link to="/">
          <div><i class="fa fa-users" style="background:#52cfad"></i></div>
          <span>班级动态</span>
        </router-link>
      </flexbox-item>
      <flexbox-item>
        <router-link to="/">
          <div><i class="fa fa-user-circle" style="background:#f6b63b"></i></div>
          <span>我的孩子</span>
        </router-link>
      </flexbox-item>
      <flexbox-item>
        <router-link to="/">
          <div><i class="fa fa-credit-card" style="background:#6ecefa"></i></div>
          <span>一卡通</span>
        </router-link>
      </flexbox-item>
    </flexbox>

    </br>
      <tab>
        <tab-item selected @on-item-click="fun('显示集团动态')">集团动态</tab-item>
        <tab-item @on-item-click="fun('显示学校动态')">校园动态</tab-item>
      </tab>

    <card v-for="item in list" :key="item.date">
      <div slot="header" class="header">
        <img :src="item.img" @click="fun('打开 '+item.name+' 的个人页面')">
        <span class="name">{{ item.name }}</span>
        <span class="date">{{ item.date }}</span>
      </div> 
      <div slot="content" class="content">
        <p>{{ item.content }}</p>
      </div>
      <div slot="footer" class="footer">
        <div class="footer-btn">
          <i class="fa fa-eye"> {{ item.read }}</i>
          <i class="fa fa-thumbs-up" @click="fun('给 '+item.name+' 点赞成功')"> {{ item.liked }}</i>
        </div>  
        <div class="comment">
          <li v-for="comment in item.comment" :key="comment.name">
            <span @click="fun('打开 '+comment.name+' 的个人页面')">{{ comment.name }}：</span>
            <span>{{ comment.content }}</span>
          </li>
          <div @click="fun('打开动态详情')">
            查看更多
          </div>
        </div>
      </div> 
    </card>

  </div>
</template>

<script>
import { Swiper,Flexbox,FlexboxItem,Card,Tab, TabItem  } from 'vux'

export default {
  name: 'hello',
  components: {
    Swiper,Flexbox,FlexboxItem,Card,Tab, TabItem 
  },
  data () {
    return {
      swiperdate:[
        { url: 'javascript:',
          img: 'https://static.vux.li/demo/1.jpg',
          title: '送你一朵fua'
        },
        { url: 'javascript:',
          img: 'https://static.vux.li/demo/2.jpg',
          title: '送你一辆车'
        },
        { url: 'javascript:',
          img: 'https://static.vux.li/demo/3.jpg',
          title: '送你一次旅行'
        }
      ],
      list:[
        {
          'img':'https://modao.cc/uploads3/images/906/9062900/raw_1493176743.png',
          'name':'张丽丽的家长',
          'date':'2017-4-25',
          'content':'『育人朗读者』是由育人教育集团宣传部推出，每周为大家推选出一本书，并择选出书中的优秀章节，由朗读者为大家领读。。。',
          'read':'40',
          'liked':'3',
          'comment':[
            {
              'name':'李大明的家长',
              'content':'祝育人教育集团越来越好！'
            },
            {
              'name':'小李',
              'content':'这一期，我们大家带来的这是来自法《人间喜剧》。'
            }
          ]
        },
        {
          'img':'https://modao.cc/uploads3/images/906/9062900/raw_1493176743.png',
          'name':'张丽丽的家长',
          'date':'2017-4-25',
          'content':'『育人朗读者』是由育人教育集团宣传部推出，每周为大家推选出一本书，并择选出书中的优秀章节，由朗读者为大家领读。。。',
          'read':'40',
          'liked':'3',
          'comment':[
            {
              'name':'李大明的家长',
              'content':'祝育人教育集团越来越好！'
            },
            {
              'name':'小李',
              'content':'这一期，我们大家带来的这是来自法《人间喜剧》。'
            }
          ]
        }
      ]
    }
  },
  methods:{
    fun(msg){
      this.$vux.toast.show({
        type:"text",
        width:"20em",
        text: msg
      })
    }
  },
  created(){

  },
  mounted(){

  }
}
</script>

<style lang="less" scoped>
.hello{
  // text-align: center;
}
.vux-flexbox{
  text-align: center;
  padding-top:1em;
  padding-bottom:1em;
  background-color: white;
  .vux-flexbox-item{
    cursor:pointer;
    div{
      width:100%;
      i{
        width:2em;
        height:2em;
        line-height:2em;
        border-radius: 2em;
        color:white;
        font-size: 2.3em;
      }
    }
    span{
      width:100%;
    }
  }
}

.weui-panel{
  position:relative;
  margin-top:0;
  margin-bottom:1em;
  .header{
    width:100%;
    padding:1em;
    font-size:1.2em;
    img{
      width:4em;
      margin-right:1em;
    }
    span:nth-child(2){ 
      position:absolute;
      top:1.5em;
    }
    span:nth-child(3){
      position:absolute;
      top:3.5em;
      color:grey;
    }
  }
  .content{
    padding-left:2em;
    padding-right:2em;
    line-height:2em;
    margin-bottom:1em;
    font-size:1.2em;
  }
  .footer{
    padding-left:2em;
    padding-right:2em;
    .footer-btn{
      color:grey;
      i:nth-child(1){
        float:left;
        padding-left:1em;
      }
      i:nth-child(2){
        float:right;
        padding-right:2em;
      }
    }
    .footer-btn:after{
      content:"";
      display:block;
      width:100%;
      height:1px;
      background:transition;
      position:relative;
      bottom:-1.3em;
    }
    .comment{
      margin-top:2em;
      margin-bottom:1em;
      padding:1em .5em .5em .5em;
      background:#f7f7f7;
      border-radius:10px;
      li{
        width:100%;
        span:nth-child(1){
          color:#03a9f4;
        }
        span:nth-child(2){
          width:100%;
        }
      }
      div{
        text-align:center;
        border-top:1px solid #e0e0e0;
        margin-top:0.5em;
        padding-top:0.5em;
      }
    }
  }

}
</style>
