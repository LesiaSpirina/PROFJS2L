Vue.component('figura-block', {
    template:
    `
    <div class="figura-banner">
              <div class="container figura-block">
                <figure class="figura-girl">
                  <div class="div-fig">
                    <div class="figura-img">
                     <img src="img/figura-girl.png" alt="photo" />
                   </div>
                   <div class="figuracontent">
                     <p class="figtext">
                       “Vestibulum quis porttitor dui! Quisque viverra nunc mi, a
                       pulvinar purus condimentum a. Aliquam condimentum mattis
                       neque sed pretium”
                     </p>
                   </div>
                 </div>
                  <figcaption class="fi">
                    <p class="figword">
                      Bin Burhan<br />
                      <span class="figauthor">
                      Dhaka, Bd</span>
                    </p>
                    <div class="line">
                      <div class="greyline"></div>
                      <div class="redline"></div>
                      <div class="greyline"></div>
                    </div>
                  </figcaption>
                </figure>
                <div class="white-line"></div>
                <form class="figura-info">
                  <p class="figura-form-text">SUBSCRIBE</p>
                  <p class="figura-mini-text">
                    FOR OUR NEWLETTER AND PROMOTION STYLE
                  </p>
                  <div class="pole-form">
                    <input
                      class="placeholdertext"
                      type="email"
                      placeholder="Enter Your Email"
                    />
                    <button
                      class="button form__button form__button_radius"
                      type="submit"
                    >
                      Subscribe
                    </button>
                  </div>
                </form>
              </div>
            </div>
    `
})