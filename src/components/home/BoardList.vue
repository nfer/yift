<template>
  <div class="board-list-container">
    <div class="stared-board board-section">
      <div class="board-section-header">
        <div class="board-section-header-icon">
          <span class="icon-lg icon-star"></span>
        </div>
        <h3 class="board-section-header-name">{{stared.title}}</h3>
      </div>
      <ul class="board-list">
        <li v-for="item in stared.items" class="board-item">
          <a href="#" class="board-item-container">
            <div class="board-item-title">{{item.title}}</div>
            <div class="board-item-title-icon">
              <span class="icon-lg icon-star is-starred"></span>
            </div>
          </a>
        </li>
      </ul>
    </div>
    <div class="personal-board board-section">
      <div class="board-section-header">
        <div class="board-section-header-icon">
          <span class="icon-lg icon-member"></span>
        </div>
        <h3 class="board-section-header-name">{{personal.title}}</h3>
      </div>
      <ul class="board-list">
        <li v-for="item in personal.items" class="board-item">
          <a href="#" class="board-item-container">
            <div class="board-item-title">{{item.title}}</div>
            <div class="board-item-title-icon">
              <span class="icon-lg icon-star is-starred"></span>
            </div>
          </a>
        </li>
        <li class="board-item board-item-new">
          <a href="#" class="board-item-container">
            <div class="board-item-title">创建新看板…</div>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BoradListContainer',
  data () {
    return {
      stared: {
        title: '加星标的看板',
        items: [
          {
            title: '工作安排',
            id: '123'
          },
          {
            title: '个人安排',
            id: '456'
          }
        ]
      },
      personal: {
        title: '个人看板',
        items: [
          {
            title: '工作安排',
            id: '123'
          },
          {
            title: '前端',
            id: '123'
          },
          {
            title: '个人安排',
            id: '456'
          },
          {
            title: '欢迎看板',
            id: '456'
          }
        ]
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul, li {
    padding: 0;
    margin: 0;
    list-style: none;
}
.board-section {
    margin: 0 auto;
    max-width: 1250px;
    padding: 20px 1pc 0;
}
.board-section-header {
    margin: 0 0 0 38px;
    padding: 0 0 11px;
    position: relative;
}
.board-section-header-icon {
    left: -38px;
    position: absolute;
    top: 0;
}
.icon-lg, .icon-sm {
    display: inline-block;
    font-family: trellicons;
    font-style: normal;
    font-weight: 400;
    text-align: center;
    text-decoration: none;
    color: #999;
}

.icon-lg {
    height: 2pc;
    font-size: 20px;
    line-height: 30px;
    width: 30px;
}
.icon-star:before {
    content: "\e951";
}

.board-section-header-name {
    display: inline-block;
    line-height: 24px;
    margin: 3px 0 0;
    font-size: 1pc;
    font-weight: 700;
}

.board-list {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-flex-wrap: wrap;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
}

.board-item {
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    padding: 0 8px 8px 0;
    position: relative;
    width: 25%;
}

.board-item-container {
    background-color: rgb(0, 121, 191);
    background-size: cover;
    background-position: center center;
    border-radius: 3px;
    color: #fff;
    display: block;
    line-height: 20px;
    margin: 0 8px 8px 0;
    padding: 8px;
    position: relative;
    text-decoration: none;

    min-height: 4pc;
    padding-bottom: 1pc;
}

.board-item-new .board-item-container {
    background-color: #E2E4E6;
    text-align: center;
}

.board-item-title {
    font-size: 1pc;
    font-weight: 700;
    display: inline-block;
    overflow: hidden;
    max-height: 40px;
}

.board-item-new .board-item-title {
    color: #838c91;
    font-weight: 500;
    line-height: 4pc;
}

.board-item-title-icon {
    right: 0;
    position: absolute;
    top: 0;
}

.board-item-title-icon .is-starred {
    color: #E6C60D;
    width: 18px;
    height: 18px;
    line-height: 18px;
    padding: 8px;
    font-size: 14px;
}

.icon-member:before {
    content: "\e936";
}
</style>
