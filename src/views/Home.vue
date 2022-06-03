<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/bg.png" /> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <div class="container">
      <div class="header">
        <div class="logoWrap">
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
          <div class="parag">
            Please register to be notified when it’s ready!
          </div>
        </div>
        <div class="cta-input">
          <input placeholder="Your Email" type="text" />
          <button>Let me Know</button>
        </div>
        <div class="arrow">
          <img src="../assets/arrow.svg" alt="" />
        </div>
        <!-- <img class="polygon" src="../assets/Polygon2.svg" alt="" /> -->
      </div>

      <div class="section2">
        <div class="main_text">
          Shop smarter and more <br />sustainable with Duko!
        </div>
        <div class="picturesList">
          <div class="row1">
            <div class="containerElem">
              <div class="wrapper">
                <div class="imageContainer">
                  <img src="../assets/pic1.png" alt="" />
                </div>
                <div class="imgDesc">
                  Check out our partners and <br />blogs on green living
                </div>
              </div>
            </div>
          </div>
          <div class="row2">
            <div class="containerElem">
              <div class="wrapper">
                <div class="imageContainer">
                  <img src="../assets/pic2.png" alt="" />
                </div>
                <div class="imgDesc">
                  Subscribe for tips and <br />
                  special offers
                </div>
              </div>
            </div>
          </div>
          <div class="row1">
            <div class="containerElem">
              <div class="wrapper">
                <div class="imageContainer">
                  <img src="../assets/pic3.png" alt="" />
                </div>
                <div class="imgDesc">
                  Make a difference with <br />
                  every euro you spend
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="theCrew">
        <div class="main_text">The Crew behind Duko</div>

        <div class="gridLayout">
          <div class="rowWrapper">
            <div class="row1">
              <img src="../assets/keiko.png" alt="" />
              <img src="../assets/lieke.png" alt="" />
            </div>
            <div class="row2">
              <img src="../assets/anna.png" alt="" />
              <img src="../assets/4.png" alt="" />
              <img src="../assets/5.png" alt="" />
            </div>
            <div class="row3">
              <img src="../assets/amine.png" alt="" />
              <img src="../assets/Rectangle30.png" alt="" />
              <img src="../assets/Rectangle31.png" alt="" />
            </div>
          </div>
        </div>
      </div>

      <div class="aboutus">
        <div class="title">About us</div>
        <p>
          DuKo is a foundation based in Utrecht that is committed to inspire
          people to shop smart and sustainable. At DuKo we believe that we can
          contribute to protecting the world by changing our consumption
          behaviour. In this way we leave less of a footprint with our community
          on this planet.<br />
          <br />
          DuKo was founded in 2012, as an initiative by and for students. We
          have been successful for many years within the student communities of
          various student cities (Utrecht, Nijmegen, The Hague). Due in part to
          the Covid pandemic, we have been struggling to keep our foundation
          going and we have decided to let a breath of fresh air through our
          platform. At the moment we are working hard to re-establish our
          service with the aim to somehow make place world a better place. DuKo
          strives to make sustainability accessible to everyone, by mapping
          (local) green shops and offering special discounts on sustainable
          products for young people. This shifts our focus from just offering
          discounts (previous use) to building a community in which we mainly
          assist young people in their search for a more sustainable lifestyle.
        </p>
      </div>

      <div class="infoSection">
        <div class="mission">
          <div class="title">Mission</div>
          <p>
            DuKo strives to empower people to consume in a smart way in order to
            enjoy their lives to the fullest without having the planet pay for
            it.
          </p>
        </div>
        <div class="vision">
          <div class="title">Vision</div>
          <p>
            DuKo strives to make sustainability accessible for everybody, by
            gathering the green local stores and providing discounts on
            sustainable products for the youth
          </p>
        </div>
      </div>

      <div class="question">
        <div class="title">Got any question..</div>

        <div class="content">
          <div class="name">
            <div><label for="">Your name</label></div>
            <input placeholder="Your name" type="text" />
          </div>
          <div class="email">
            <div><label for="">Your email</label></div>
            <input placeholder="For exemple duko@contact.com" type="email" />
          </div>
          <div class="message">
            <div><label for="">Your message</label></div>
            <textarea name="" id="" cols="30" rows="10"></textarea>
          </div>
          <div class="submit">
            <div class="buttonContent">Submit</div>
          </div>

          <div class="followJourney">Or follow our journey...</div>
          <div class="instIcon"><i class="bx bxl-instagram"></i></div>
        </div>
      </div>
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
    min-width: 30rem;

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