// tagBox
{
  let tagBox = document.querySelector(".topBox>.tagsBox>div");
  let moreTagsButton = document.querySelector(
    ".topBox>.tagsBox>span:nth-child(2)"
  );
  moreTagsButton.innerHTML = '<b>MORE TAGS </b><i class="fas fa-plus"></i>';
  let clicked = false;
  moreTagsButton.addEventListener("click", () => {
    if (!clicked) {
      clicked = !clicked;
      moreTagsButton.innerHTML =
        '<b>LESS TAGS </b><i class="fas fa-times"></i>';
      tagBox.classList.remove("smallerTagBox");
      tagBox.classList.add("biggerTagBox");
    } else {
      clicked = !clicked;
      tagBox.classList.add("smallerTagBox");
      tagBox.classList.remove("biggerTagBox");
      moreTagsButton.innerHTML = '<b>MORE TAGS </b><i class="fas fa-plus"></i>';
    }
    // console.log(moreTagsButton.innerHTML);
  });

  let tagDetails = [
    {
      text: "Comic",
      count: 100,
      link: "./src/pics/tag.PNG",
      color: `rgb(${Math.random() * 255},${Math.random() * 255},${
        Math.random() * 255
      })`
    },
    {
      text: "Funny",
      count: 100,
      link: "./src/pics/tag.PNG",
      color: `rgb(${Math.random() * 255},${Math.random() * 255},${
        Math.random() * 255
      })`
    },
    {
      text: "Memes",
      count: 100,
      link: "./src/pics/tag.PNG",
      color: `rgb(${Math.random() * 255},${Math.random() * 255},${
        Math.random() * 255
      })`
    },
    {
      text: "Gaming",
      count: 100,
      link: "./src/pics/tag.PNG",
      color: `rgb(${Math.random() * 255},${Math.random() * 255},${
        Math.random() * 255
      })`
    },
    {
      text: "Staff Picks",
      count: 100,
      link: "./src/pics/tag.PNG",
      color: `rgb(${Math.random() * 255},${Math.random() * 255},${
        Math.random() * 255
      })`
    },
    {
      text: "Aww",
      count: 100,
      link: "./src/pics/tag.PNG",
      color: `rgb(${Math.random() * 255},${Math.random() * 255},${
        Math.random() * 255
      })`
    },
    {
      text: "Oc",
      count: 100,
      link: "./src/pics/tag.PNG",
      color: `rgb(${Math.random() * 255},${Math.random() * 255},${
        Math.random() * 255
      })`
    },
    {
      text: "Science and Tech",
      count: 100,
      link: "./src/pics/tag.PNG",
      color: `rgb(${Math.random() * 255},${Math.random() * 255},${
        Math.random() * 255
      })`
    },
    {
      text: "Awesome",
      count: 100,
      link: "./src/pics/tag.PNG",
      color: `rgb(${Math.random() * 255},${Math.random() * 255},${
        Math.random() * 255
      })`
    },
    {
      text: "Artcrawl",
      count: 100,
      link: "./src/pics/tag.PNG",
      color: `rgb(${Math.random() * 255},${Math.random() * 255},${
        Math.random() * 255
      })`
    },
    {
      text: "Unmuted",
      count: 100,
      link: "./src/pics/tag.PNG",
      color: `rgb(${Math.random() * 255},${Math.random() * 255},${
        Math.random() * 255
      })`
    },
    {
      text: "Coffee",
      count: 100,
      link: "./src/pics/tag.PNG",
      color: `rgb(${Math.random() * 255},${Math.random() * 255},${
        Math.random() * 255
      })`
    },
    {
      text: "Dog",
      count: 100,
      link: "./src/pics/tag.PNG",
      color: `rgb(${Math.random() * 255},${Math.random() * 255},${
        Math.random() * 255
      })`
    },
    {
      text: "Crab",
      count: 100,
      link: "./src/pics/tag.PNG",
      color: `rgb(${Math.random() * 255},${Math.random() * 255},${
        Math.random() * 255
      })`
    },
    {
      text: "Current Events",
      count: 100,
      link: "./src/pics/tag.PNG",
      color: `rgb(${Math.random() * 255},${Math.random() * 255},${
        Math.random() * 255
      })`
    },
    {
      text: "Uplifting",
      count: 100,
      link: "./src/pics/tag.PNG",
      color: `rgb(${Math.random() * 255},${Math.random() * 255},${
        Math.random() * 255
      })`
    },
    {
      text: "Movies and TV",
      count: 100,
      link: "./src/pics/tag.PNG",
      color: `rgb(${Math.random() * 255},${Math.random() * 255},${
        Math.random() * 255
      })`
    }
  ];
  tagDetails.map((el, index) => {
    const tagCard = document.createElement("div");
    tagCard.style.backgroundColor = el.color;
    tagCard.setAttribute("class", "tagcard");

    {
      const tagImage = document.createElement("img");
      tagImage.src = el.link;
      tagImage.style.width = "100%";
      const tagText = document.createElement("p");
      tagText.innerText = el.text;
      const tagTextFeatured = document.createElement("p");
      tagTextFeatured.innerHTML = `Featured . <span>${el.count}</span> Posts`;
      tagTextFeatured.style.fontSize = ".7rem";
      tagCard.append(tagImage, tagText, tagTextFeatured);
    }
    tagBox.append(tagCard);
  });
}

// scroll logic for navbar transition
{
  // document.querySelector(".container").scrollTop=250
  document.querySelector(".container").addEventListener("scroll", () => {
    if (document.querySelector(".container").scrollTop > 250) {
      document.querySelector(".nav1").classList.add("invisible");
      document.querySelector(".nav2").classList.remove("invisible");
      document.querySelector(".nav2").classList.add("displayFlex");
    } else {
      document.querySelector(".nav2").classList.add("invisible");
      document.querySelector(".nav1").classList.remove("invisible");
      document.querySelector(".nav2").classList.remove("displayFlex");
    }
  });
}

async function getData() {
  let data = await fetch(
    "https://api.imgur.com/3/gallery/top/?showViral=true&mature=true&album_previews=true",
    {
      method: "get",
      headers: {
        Authorization: "Client-ID 72801112da50b9e"
      },
      redirect: "follow"
    }
  );
  return data;
}

// main flex box
{
  const mainFlexbox = document.querySelector(".nav2+div");

  getData().then((data) => {
    data.json().then((data) => {
      for (let i = 0; i < data.data.length; i++) {
        if (data.data[i].images?.length > 0) {
          // console.log(data.data[i].images[0].link)
          // console.log(data.data[i].title)
          // console.log(data.data[i].comment_count)
          // console.log(data.data[i].ups)
          // console.log(data.data[i].views)
          console.log(data.data[i]);
          // gifcard
          {
            let gifCard = document.createElement("div");
            const gif = document.createElement("div");
            {
              let gifImage;
              if (data.data[i].images[0].gifv) {
                gifImage = document.createElement("div");
                let str = data.data[i].images[0].link.split(":")[1].trim();
                gifImage.innerHTML = `
                <video poster="//i.imgur.com/UEKAmq5h.jpg" preload="auto" autoplay="autoplay" muted="muted" loop="loop" webkit-playsinline="" style="width: 100%; height:auto;">
                <source src=${str} type="video/mp4">
                </video>`;
                gifImage.style.overflow = "hidden";
              } else {
                gifImage = document.createElement("img");
                gifImage.src = data.data[i].images[0].link;
              }
              gifImage.style.width = "100%";
              gifImage.style.height = "100%";
              gif.append(gifImage);
            }
            const gifText = document.createElement("p");
            if (data.data[i].title.length < 2) continue;
            gifText.innerText = data.data[i].title;
            const statsBar = document.createElement("div");
            statsBar.setAttribute("class", "statsBar");
            statsBar.innerHTML =
              // <i class="far fa-angle-up"></i>
              // <i class="fas fa-arrow-alt-down"></i>`;
              `<i class="fas fa-comment-alt"></i>
            ${data.data[i].comment_count}
            <i class="fas fa-eye"></i>
            ${data.data[i].views}`;
            gifCard.append(gif, gifText, statsBar);

            // console.log(gifCard);
            mainFlexbox.append(gifCard);
          }
        }
      }
    });
  });
}
