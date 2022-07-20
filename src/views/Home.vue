<template>
  <div class="homeWrapper">
    <div
      class="header bg-green-600 max-w-7xl mx-auto sm:px-6 lg:px-8 mb-4 mt-8 pb-12 md:rounded-2xl"
    >
      <!-- <div class="logoWrap">
        <img class="dukoLogo" src="../assets/logoDuko.png" alt="" />
      </div>
      <div class="calenderElement">
        <div class="col">
          <div class="val1">143</div>
          <div class="val2">Days</div>
        </div>
        <div class="col">
          <div class="val1">00</div>
          <div class="val2">Days</div>
        </div>
        <div class="col">
          <div class="val1">00</div>
          <div class="val2">Days</div>
        </div>
      </div>
      <div class="textElem">
        <div class="text1">We are working hard to launch our new website</div>
        <div class="parag">Please register to be notified when it’s ready!</div>
      </div>
      <div class="cta-input">
        <input placeholder="Your Email" type="text" />
        <button>Let me Know</button>
      </div>
      <div class="arrow">
        <img src="../assets/arrow.svg" alt="" />
      </div> -->

      <div class="flex justify-center">
        <img class="dukoLogo" src="../assets/logoDuko.png" alt="" />
      </div>
      <div class="w-full flex justify-evenly pt-24">
        <div class="flex flex-col items-center">
          <div class="text-3xl">143</div>
          <div class="text-xl">Days</div>
        </div>
        <div class="flex flex-col items-center">
          <div class="text-3xl">00</div>
          <div class="text-xl">Hours</div>
        </div>
        <div class="flex flex-col items-center">
          <div class="text-3xl">00</div>
          <div class="text-xl">Seconds</div>
        </div>
      </div>
      <div
        class="mainText w-full md:flex md:flex-col md:items-center md:justify-center pt-8"
      >
        <div class="text-2xl md:text-4xl">
          We are working hard to launch our new website
        </div>
        <div class="text-md md:text-xl">
          Please register to be notified when it’s ready!
        </div>
      </div>

      <div class="buttonSide w-full flex justify-center pt-20">
        <div class="w-full flex flex-col md:flex-row md:w-1/2">
          <input
            class="md:w-3/4 p-1 px-4 text-gray-800"
            placeholder="Your Email"
            type="text"
          />
          <button class="md:w-1/4 p-1 bg-primary-pink">Let me Know</button>
        </div>
      </div>
      <div class="w-full flex justify-center pt-12">
        <img src="../assets/arrow.svg" alt="" />
      </div>
    </div>

    <div class="process max-w-7xl mx-auto sm:px-6 lg:px-8 mb-4 mt-8">
      <div class="textTitle w-full flex justify-center">
        <div class="text-primary-green text-2xl md:text-4xl font-medium">
          Shop smarter and more <br />
          sustainable with Duko!
        </div>
      </div>
      <div class="pictureList w-full flex flex-col items-center justify-center">
        <div
          class="picturewrapper pt-8 flex flex-col items-center justify-center"
        >
          <div class="picture mb-4">
            <img class="h-44 w-44" src="../assets/pic1.png" alt="" />
          </div>
          <div class="text-center text-primary-orange font-medium">
            Check out our partners and <br />blogs on green living
          </div>
        </div>
        <div
          class="picturewrapper pt-8 flex flex-col items-center justify-center"
        >
          <div class="picture mb-4">
            <img class="h-44 w-44" src="../assets/pic2.png" alt="" />
          </div>
          <div class="text-center text-primary-orange font-medium">
            Check out our partners and <br />blogs on green living
          </div>
        </div>
        <div
          class="picturewrapper pt-8 flex flex-col items-center justify-center"
        >
          <div class="picture mb-4">
            <img class="h-44 w-44" src="../assets/pic3.png" alt="" />
          </div>
          <div class="text-center text-primary-orange font-medium">
            Check out our partners and <br />blogs on green living
          </div>
        </div>
      </div>
    </div>

    <div class="aboutUS max-w-7xl mx-auto sm:px-6 lg:px-8 mb-4 mt-8">
      <div class="titleAboutUS text-primary-green">About us</div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    // HelloWorld,
  },
};
</script>


<style lang="scss">
.home {
  // background: green;

  .container {
    padding: 1rem;
  }
}
.header {
  // background: rgb(102, 95, 95);
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  // margin: 1rem;
  padding: 1rem;
  background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2)),
    url(../assets/bg.png) no-repeat;

  background-size: cover;
  .dukoLogo {
    height: 3.5rem;
    widows: 3.5rem;
  }

  .calenderElement {
    margin-top: 7.6em;
    margin-bottom: 1.6em;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    // background: red;
    max-width: 30rem;
    width: 30rem;

    .col {
      display: flex;
      flex-direction: column;
      align-content: center;
      justify-content: center;
      // background: rgb(133, 133, 129);

      .val1 {
        text-align: center;
        font-size: 2.5em;
        margin-bottom: 0.9em;
      }

      .val2 {
        text-align: center;
        font-size: 1.5em;
      }
    }
  }

  .textElem {
    text-align: center;
    margin-bottom: 4.5em;
    .text1 {
      font-size: 2.5em;
      font-weight: 500;
      // line-height: 3em;
    }
    .parag {
      font-size: 1.5em;
      font-weight: 400;
    }
  }

  .cta-input {
    min-width: 42em;
    background: white;
    height: 2.5em;
    margin-bottom: 2em;

    input {
      outline: none;
      border: none;
      width: 66%;
      // height: 100% !important;
      padding-left: 1em;
      padding-right: 1em;
    }

    button {
      all: unset;
      background: #db0a5b;
      width: 30%;
      height: 100% !important;
      text-align: center;
    }
  }

  .polygon {
    position: absolute;
  }
}

.section2 {
  margin-top: 3em;
  // background: red;
  padding-left: 10em;
  padding-right: 10em;
  .main_text {
    color: #0c571b;
    font-size: 3em;
    text-align: center;
    font-weight: 500;
  }

  .picturesList {
    margin-top: 3em;
  }

  .row2 {
    .containerElem {
      display: flex;
      flex-direction: column;
      align-items: flex-end;

      .imageContainer {
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .imgDesc {
        color: #da7f78;
        font-size: 1.2em;
        font-weight: 600;
        margin-top: 2.3rem;
        text-align: center;
      }
    }
  }

  .row1 {
    .containerElem {
      display: flex;
      flex-direction: column;
      align-items: flex-start;

      .imageContainer {
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .imgDesc {
        color: #da7f78;
        font-size: 1.2em;
        font-weight: 600;
        margin-top: 2.3rem;
        text-align: center;
      }
    }
  }
}

.theCrew {
  .main_text {
    color: #0c571b;
    font-size: 3em;
    text-align: center;
    font-weight: 500;
    margin-top: 4rem;
    margin-bottom: 1rem;
  }

  .gridLayout {
    display: flex;
    align-items: center;
    flex-direction: column;
    // background: yellow;

    .rowWrapper {
      // background: rgb(168, 34, 34);
    }

    .row1 {
      display: flex;
      flex-direction: row;
    }
    .row2 {
      display: flex;
      flex-direction: row;
    }
    .row3 {
      display: flex;
      flex-direction: row;
    }
  }
}

.aboutus {
  padding-left: 10em;
  padding-right: 10em;
  margin-top: 4rem;

  .title {
    color: #0c571b;
    font-size: 2.8em;
    font-weight: 500;
  }

  p {
    margin-top: 2rem;
    font-weight: 400;
  }
}

.infoSection {
  padding-left: 10em;
  padding-right: 10em;
  display: flex;
  flex-direction: row;
  margin-top: 2rem;

  .mission {
    width: 50%;

    .title {
      color: #0c571b;
      font-size: 2.8em;
      font-weight: 500;
    }

    p {
      width: 80%;
      margin-top: 1rem;
    }
  }
  .vision {
    width: 50%;

    .title {
      color: #0c571b;
      font-size: 2.8em;
      font-weight: 500;
    }

    p {
      width: 80%;
      margin-top: 1rem;
    }
  }
}

.question {
  background: #0c571b;
  padding-left: 10rem;
  padding-right: 10rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
  color: white;
  margin-top: 5rem;

  .title {
    color: white;
    font-size: 2.8em;
    font-weight: 500;
    text-align: center;
  }
}

.content {
  input {
    width: 100%;
    padding: 5px;
  }

  textarea {
    width: 100%;
    padding: 5px;
  }

  .name,
  .email {
    margin-bottom: 1.5rem;
  }

  .submit {
    display: flex;
    justify-content: center;

    .buttonContent {
      background: #db0a5b;
      padding: 0.5rem 4rem 0.5rem 4rem;
      margin-top: 1rem;
    }
  }

  .followJourney {
    text-align: center;
    margin-top: 5rem;
    font-size: 1.5em;
  }

  .instIcon {
    text-align: center;
    font-size: 3em;
    margin-top: 1rem;
  }
}
</style>