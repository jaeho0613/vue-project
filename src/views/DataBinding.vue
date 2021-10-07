<template>
  <div>

    <h1>{{ title }}</h1>

    <h1>HTML 데이터 바인딩</h1>
    <div>{{ htmlString }}</div>
    <div v-html="htmlString"></div>

    <h1>Input 데이터 바인딩</h1>
    <h3>text input</h3>
    <div>
      <input type="text" v-model="valueModel"/>
    </div>
    <h3>number input</h3>
    <div>
      <input type="number" v-model.number="numberModel"/>
    </div>
    <h3>text area input</h3>
    <div>
      <textarea v-model="message"></textarea>
    </div>

    <h1>Select 데이터 바인딩</h1>
    <div>
      <select v-model="city">
        <option value="02">서울</option>
        <option value="21">부산</option>
        <option value="064">제주</option>
      </select>
    </div>

    <h1>CheckBox 데이터 바인딩</h1>
    <h3>단일 체크박스</h3>
    <div>
      <label><input type="checkbox" v-model="checked" true-value="yes" false-value="no"> {{ checked }}</label>
    </div>

    <h3>배열 체크박스</h3>
    <div>
      <label><input type="checkbox" value="서울" v-model="checkedArr"> 서울</label>
      <label><input type="checkbox" value="부산" v-model="checkedArr"> 부산</label>
      <label><input type="checkbox" value="제주" v-model="checkedArr"> 제주</label>
      <br>
      <span>체크한 지역: {{ checkedArr }}</span>
    </div>

    <h1>Radio 데이터 바인딩</h1>
    <div>
      <label><input type="radio" v-bind:value="radioValue1" v-model="picked"> 서울</label>
      <label><input type="radio" v-bind:value="radioValue2" v-model="picked"> 부산</label>
      <label><input type="radio" v-bind:value="radioValue3" v-model="picked"> 제주</label>
      <br>
      <span>체크한 지역: {{ picked }}</span>
    </div>

    <h1>Img 데이터 바인딩</h1>
    <div>
      <img v-bind:src="imgSrc"/>
    </div>

    <h1>Button 데이터 바인딩</h1>
    <div>
      <input type="text" v-model="textValue"/>
      <button type="button" v-bind:disabled="textValue==''">Click</button>
    </div>

    <h1>Class 데이터 바인딩</h1>
    <h3>오브젝트를 이용</h3>
    <div class="container" v-bind:class="{'active': isActive, 'text-red': hasError}">Class Binding</div>
    <h3>배열을 이용</h3>
    <div class="container" v-bind:class="[activeClass, errorClass]">Class Binding</div>

    <h1>인라인 스타일 바인딩</h1>
    <h3>오브젝트를 이용</h3>
    <div v-bind:style="styleObject">인라인 스타일 바인딩</div>
    <h3>배열을 이용</h3>
    <div v-bind:style="[addStyle,baseStyle]">인라인 스타일 바인딩</div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      title: 'World',
      htmlString: '<p style="color: red;">This is a red string.</p>',
      valueModel: 'South Korea',
      numberModel: 3,
      message: "여러 줄을 입력할 수 있는 textarea 입니다.",
      city: "064",
      checked: 'yes',
      checkedArr: [],
      picked: '',
      radioValue1: '서울',
      radioValue2: '부산',
      radioValue3: '제주',
      imgSrc: "https://kr.vuejs.org/images/logo.png",
      textValue: "",
      isActive: true,
      hasError: true,
      activeClass: 'active',
      errorClass: 'text-red',
      styleObject: {
        color: 'red',
        fontSize: '13px'
      },
      baseStyle: {
        'background-color': 'yellow',
        'width': '100%',
        'height': '200px'
      },
      addStyle: {
        'color': 'red',
        'font-weight': 'bold'
      }
    }
  }
}
</script>

<style scoped>
container {
  width: 100%;
  height: 200px;
}

.active {
  background-color: yellow;
  font-weight: bold;
}

.text-red {
  color: red;
}
</style>