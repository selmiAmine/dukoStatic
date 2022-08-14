<template>
  <div>
    <transition>
      <div
        v-if="loader"
        class="preloader transition duration-150 ease-out ease-in fixed flex justify-center items-center w-full h-full bg-primary-bg"
      >
        <div class="loader"></div>
      </div>
    </transition>
    <div class="homeWrapper md:mb-8 md:pt-8">
      <div
        class="header bg-green-600 max-w-7xl mx-auto sm:px-6 lg:px-8 pt-8 pb-12 md:rounded-2xl"
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

        <h1
          class="w-full md:text-center pt-24 font-bold text-2xl md:text-4xl font-semibold md:mb-2"
        >
          Coming soon
        </h1>

        <!-- Counter -->
        <!-- <div class="w-full flex justify-evenly pt-24">
          <div class="flex flex-col items-center">
            <div class="text-3xl">{{ displayDays }}</div>
            <div class="text-xl">Days</div>
          </div>
          <div class="flex flex-col items-center">
            <div class="text-3xl">{{ displayHours }}</div>
            <div class="text-xl">Hours</div>
          </div>
          <div class="flex flex-col items-center">
            <div class="text-3xl">{{ displayMinutes }}</div>
            <div class="text-xl">Minutes</div>
          </div>
          <div class="flex flex-col items-center hidden md:flex">
            <div class="text-3xl">{{ displaySeconds }}</div>
            <div class="text-xl">Seconds</div>
          </div>
        </div> -->
        <div
          class="mainText w-full md:flex md:flex-col md:items-center md:justify-center pt-8"
        >
          <div class="text-2xl md:text-4xl font-semibold md:mb-2">
            We are working hard to launch our new website
          </div>
          <div class="text-md md:text-xl">
            Please register to be notified when it’s ready!
          </div>
        </div>

        <div class="buttonSide w-full flex justify-center pt-20">
          <div class="w-full flex flex-col md:flex-row md:w-1/2">
            <input
              v-model="email"
              class="md:w-3/4 p-1 px-4 text-gray-800 text-center"
              placeholder="Your Email"
              type="text"
            />
            <button @click="storeEmail" class="md:w-1/4 p-1 bg-primary-pink">
              Let me posted
            </button>
          </div>
        </div>
        <div class="w-full flex justify-center pt-12">
          <img src="../assets/arrow.svg" alt="" />
        </div>
      </div>

      <div class="process max-w-7xl mx-auto sm:px-6 lg:px-8 mb-4 mt-8 md:mt-16">
        <div class="textTitle w-full flex justify-center">
          <div
            class="text-primary-green text-primary-green text-center text-3xl font-extrabold tracking-tight sm:text-4xl md:text-left md:mb-2"
          >
            Shop smarter and more <br />
            sustainable with DuKo!
          </div>
        </div>
        <div
          class="w-full flex justify-center text-primary-green text-primary-green text-center text-lg font-bold tracking-tight sm:text-xl md:text-left md:mb-8"
        >
          What To expect ?
        </div>
        <div
          class="pictureList w-full flex flex-col items-center justify-center"
        >
          <div
            class="picturewrapper w-2/3 pt-8 flex justify-center md:justify-start"
          >
            <div class="wrapperCon flex flex-col items-center justify-center">
              <div class="picture mb-4">
                <img
                  class="h-44 md:h-60 md:w-60 w-44"
                  src="../assets/pic1.png"
                  alt=""
                />
              </div>
              <div class="text-center text-primary-orange font-medium">
                Check out our partners and <br />blogs on green living
              </div>
            </div>
          </div>
          <div
            class="picturewrapper w-2/3 pt-8 flex justify-center md:justify-end"
          >
            <div class="wrapperCon flex flex-col items-center justify-center">
              <div class="picture mb-4">
                <img
                  class="h-44 w-44 md:h-60 md:w-60"
                  src="../assets/pic2.png"
                  alt=""
                />
              </div>
              <div class="text-center text-primary-orange font-medium">
                Subscribe for tips and <br />special offers
              </div>
            </div>
          </div>
          <div
            class="picturewrapper w-2/3 pt-8 flex justify-center md:justify-start"
          >
            <div class="wrapperCon flex flex-col items-center justify-center">
              <div class="picture mb-4">
                <img
                  class="h-44 w-44 md:h-60 md:w-60"
                  src="../assets/pic3.png"
                  alt=""
                />
              </div>
              <div class="text-center text-primary-orange font-medium">
                Make a difference with <br />
                every euro you spend
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="theTeam">
        <div class="">
          <div class="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
            <div class="grid grid-cols-1 lg:grid-cols-3 lg:gap-8">
              <div class="space-y-5 sm:space-y-4">
                <h2
                  class="text-primary-green text-3xl font-extrabold tracking-tight sm:text-4xl"
                >
                  The Crew behind Duko
                </h2>
                <p class="text-xl text-gray-500"></p>
              </div>
              <div class="lg:col-span-2">
                <ul
                  role="list"
                  class="space-y-12 sm:grid sm:grid-cols-2 sm:gap-12 sm:space-y-0 lg:gap-x-8"
                >
                  <div
                    class="p-4 memberPresentation col-span-2 rounded-xl shadow-md transition-all"
                  >
                    <h1 class="text-xl mb-2 font-medium">
                      A Message from {{ people[state.selected].name }} !
                    </h1>
                    <div>
                      <p v-if="viewAll">
                        {{ people[state.selected].description }}
                      </p>
                      <p v-if="!viewAll">
                        {{ people[state.selected].description.slice(0, 200) }}
                        ..
                      </p>
                      <span
                        v-if="!viewAll"
                        class="cursor-pointer text-primary-green font-medium"
                        @click="readMore"
                        >Read more ...</span
                      >
                      <span
                        v-if="viewAll"
                        class="cursor-pointer text-primary-green font-medium"
                        @click="readLess"
                        >Read less
                      </span>
                    </div>
                  </div>
                  <li
                    class="border-2 p-2 rounded-xl hover:shadow-xl transition-shadow"
                    v-for="person in people"
                    :key="person.name"
                    @click="switchUser(person.id)"
                  >
                    <div class="flex items-center space-x-4 lg:space-x-6">
                      <img
                        class="object-cover w-16 h-16 rounded-full lg:w-20 lg:h-20"
                        :src="getImgUrl(person.imageUrl)"
                        alt
                      />
                      <div class="font-medium text-lg leading-6 space-y-1">
                        <h3>{{ person.name }}</h3>
                        <p class="text-primary-green">{{ person.role }}</p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="aboutUS max-w-7xl mx-auto sm:px-6 lg:px-8 mb-4 mt-8 px-4">
        <div
          class="titleAboutUS text-primary-green text-3xl font-extrabold tracking-tight sm:text-4xl text-left px-2"
        >
          About us
        </div>
        <p class="px-2 pt-4 md:mb-8">
          DuKo is a foundation based in Utrecht that is committed to inspire
          people to shop smart and sustainable. At DuKo we believe that we can
          contribute to protecting the world by changing our consumption
          behaviour. In this way we leave less of a footprint with our community
          on this planet. <br /><br />

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
        <!-- <div class="misionAndVision md:flex px-2">
          <div class="missionSide">
            <div
              class="titleMission text-primary-green text-left text-3xl font-extrabold tracking-tight sm:text-4xl md:text-left mt-4 mb-2"
            >
              Mission
            </div>
            <p class="md:w-4/5">
              DuKo strives to empower people to consume in a smart way in order
              to enjoy their lives to the fullest without having the planet pay
              for it.
            </p>
          </div>
          <div class="visionSide">
            <div
              class="titleVision text-primary-green text-left text-3xl font-extrabold tracking-tight sm:text-4xl md:text-left mt-4 mb-2"
            >
              Vision
            </div>
            <p class="md:w-4/5">
              DuKo strives to make sustainability accessible for everybody, by
              gathering the green local stores and providing discounts on
              sustainable products for the youth
            </p>
          </div>
        </div> -->
      </div>

      <div
        class="aboutUS max-w-7xl mx-auto sm:px-6 lg:px-8 mt-8 bg-primary-green p-8 md:rounded-xl"
      >
        <div class="titleAboutUS text-primary-green flex justify-center">
          <div
            class="textContent text-white text-2xl md:text-4xl font-medium mb-12"
          >
            Got any questions ...
          </div>
        </div>

        <div class="nameInputGroup mb-4">
          <label class="text-white text-md"> Your name</label>
          <input
            type="text"
            v-model="questionForm.name"
            class="w-full text-sm bg-white text-gray-700 p-1 px-2"
          />
        </div>
        <div class="emailInputGroup mb-4">
          <label class="text-white text-md"> Your email</label>
          <input
            type="text"
            v-model="questionForm.email"
            class="w-full text-sm bg-white text-gray-700 p-1 px-2"
          />
        </div>
        <div class="textAreaInputGroup mb-4">
          <label class="text-white text-md"> Your message</label>
          <textarea
            name="yourMessage"
            v-model="questionForm.message"
            id=""
            cols="30"
            rows="5"
            class="w-full text-sm bg-white text-gray-700 p-1 px-2"
            placeholder="Write your message"
          ></textarea>
        </div>
        <div class="buttonContainer w-full flex justify-center mt-2 mb-12">
          <button
            @click="storequestionForm"
            class="bg-primary-pink w-full md:w-1/5 text-white text-md py-1 px-12"
          >
            Submit
          </button>
        </div>
        <div class="follow flex flex-col items-center justify-center">
          <div class="textFollow text-white text-lg mb-4">
            Follow our journey...
          </div>
          <div class="instaLogo text-white text-4xl">
            <i class="bx bxl-instagram"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";

import { db } from "@/firebase";
import { collection, addDoc } from "firebase/firestore";

export default {
  name: "Home",
  components: {
    // HelloWorld,
  },

  data: () => ({
    displayDays: 0,
    displayHours: 0,
    displayMinutes: 0,
    displaySeconds: 0,
    email: "",
    viewAll: false,
    loader: true,

    questionForm: {
      email: "",
      name: "",
      question: "",
    },
  }),
  computed: {
    _seconds: () => 1000,
    _minutes() {
      return this._seconds * 60;
    },
    _hours() {
      return this._minutes * 60;
    },
    _days() {
      return this._hours * 24;
    },
  },
  mounted() {
    this.showRemaining();
    this.showLoader();
  },
  methods: {
    showLoader() {
      setTimeout(() => {
        this.loader = false;
      }, 3000);
    },

    getImgUrl(pet) {
      var images = require.context("../assets/TeamsPics/", false, /\.jpg$/);
      return images("./" + pet + ".jpg");
    },
    async storeEmail() {
      const docRef = await addDoc(collection(db, "emails"), {
        email: this.email,
      });
      console.log(docRef.id);
    },

    async storequestionForm() {
      const docRef = await addDoc(collection(db, "questionForm"), {
        name: this.questionForm.name,
        email: this.questionForm.email,
        message: this.questionForm.message,
      });
      console.log(docRef.id);
    },

    showRemaining() {
      const timer = setInterval(() => {
        const now = new Date();
        const end = new Date(2023, 1, 1, 10, 10, 10);
        const distance = end.getTime() - now.getTime();

        if (distance < 0) {
          clearInterval(timer);
          return;
        }

        const days = Math.floor(distance / this._days);
        const hours = Math.floor((distance % this._days) / this._hours);
        const minutes = Math.floor((distance % this._hours) / this._minutes);
        const seconds = Math.floor((distance % this._minutes) / this._seconds);

        this.displayMinutes = minutes < 10 ? "0" + minutes : minutes;
        this.displaySeconds = seconds < 10 ? "0" + seconds : seconds;
        this.displayHours = hours < 10 ? "0" + hours : hours;
        this.displayDays = days < 10 ? "0" + days : days;
      }, 1000);
    },
    readMore() {
      this.viewAll = true;
    },
    readLess() {
      this.viewAll = false;
    },
  },
};
</script>


<script setup>
const people = [
  {
    id: 0,
    name: "Keiko",
    role: "President - Board member",
    imageUrl: "dukoteam2-min",
    description:
      "When I started at the forerunner of DuKo I wanted to contribute to a project that supported sustainability. My parents raised my sister and I with the notion that we people need everything around us to live and everything on this planet has its own value and contribution to this planets existance. As cofounder of DuKo I strongly believe we all have our responsibility to protect this place we live on, our planet. Now that I have children of my own, I want them and future generations to enjoy this beautiful place too. Things will change and so does our planet, but I don't want to destroy it and I think none of us purposely want to do this. And that is why I continue my work with DuKo. Sustainability, climate change and subjects around these matters are so big and we as individuals feel so small. But I too believe that all our individual actions combined have a great impact. With DuKo I hope to contribute to helping others develop their own path to a have a less negative footprint.",
  },
  {
    id: 1,
    name: "Lieke",
    role: "Board member",
    imageUrl: "dukoteam6-min",
    description:
      "The main goal of my life is: to use my capabilities and knowledge to make a positive impact on this world. As a Visual Designer, I can be a mediator between the complexity of our world and the audience, to build up awareness and stimulate a change. Working for Duko is a way for me to reach my goal. What I found interesting, the very first time, is their way to front this big topic, which is sustainability, suggesting people just small steps. In my opinion, this is a good strategy to let them feel less stressed from the minor changes that they need to do.",
  },
  {
    id: 2,
    name: "Gracia",
    role: "Board member",
    imageUrl: "dukoteam13-min",
    description:
      "The reason why I joined the DuKo team is because I would like to learn more about sustainability. As a student, I noticed that I often found it difficult to make sustainable choices, because they often seem very expensive (at first glance). Over the past few years, I've been delving more and more into it, but I think I still have a lot to learn. I've had several PR positions in different student committees in the past so I think DuKo is the perfect way to apply this knowledge for our content while learning more about sustainability from an awesome team!",
  },
  {
    id: 3,
    name: "Tarek",
    role: "Mobile Engineer",
    imageUrl: "dukoteam7-min",
    description:
      "Living on a clean and comfortable planet is a right, but also a duty for all of us. To achieve this goal, and as a mobile development engineer, I try to help the DuKo team to brainstorm and develop the technical parts of our solution that really help spread the culture of sustainability.",
  },
  {
    id: 4,
    name: "Michela",
    role: "Graphic Designer",
    imageUrl: "dukoteam20-min",
    description:
      "The main goal of my life is: to use my capabilities and knowledge to make a positive impact on this world. As a Visual Designer, I can be a mediator between the complexity of our world and the audience, to build up awareness and stimulate a change. Working for Duko is a way for me to reach my goal. What I found interesting, the very first time, is their way to front this big topic, which is sustainability, suggesting people just small steps. In my opinion, this is a good strategy to let them feel less stressed from the minor changes that they need to do.",
  },
  {
    id: 5,
    name: "Paula",
    role: "UX Designer",
    imageUrl: "dukoteam10-min",
    description:
      "Since I was a kid, my father involved me into sustentability. Growing up, I realized how much we contaminated and how less we do. I love nature and the planet we live. My role in Duko is as UX designer and I joined to help with my skills to make more people conscious about the small steps you can do. I believe that if everyone do an action, doesn´t matter big or small, to help the planet; can do a lot for our future",
  },
  {
    id: 6,
    name: "Amine",
    role: "Web Developer",
    imageUrl: "dukoteam19-min",
    description:
      "Since I was a kid, my father involved me into sustentability. Growing up, I realized how much we contaminated and how less we do. I love nature and the planet we live. My role in Duko is as UX designer and I joined to help with my skills to make more people conscious about the small steps you can do. I believe that if everyone do an action, doesn´t matter big or small, to help the planet; can do a lot for our future",
  },
];

import { reactive } from "@vue/reactivity";

const state = reactive({
  selected: 0,
});

const switchUser = (id) => {
  state.selected = id;
  console.log(id);
};

// const days = ref(0);
// const hours = ref(0);
// const minutes = ref(0);
// const launchDate = new Date("1 January 2023");

// setInterval(() => {
//   const currDate = new Date();
//   const launchTime = launchDate - currDate;

//   minutes.value = parseInt(launchTime / 60);
//   hours.value = parseInt(minutes.value / 60);
//   days.value = parseInt(hours.value / 24);
// }, 1000);
</script>


<style lang="scss">
.v-enter-active,
.v-leave-active {
  transition: opacity 1s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

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

.loader {
  width: 48px;
  height: 48px;
  border: 3px solid #fff;
  border-radius: 50%;
  display: inline-block;
  position: relative;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;
}
.loader::after {
  content: "";
  box-sizing: border-box;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 56px;
  height: 56px;
  border-radius: 50%;
  border: 3px solid transparent;
  border-bottom-color: #ff3d00;
}

@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
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