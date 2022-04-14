<?php
include_once 'header.php';
 ?>

 <?php
 include_once 'projectindex.php';
  ?>

        <!-- ---------------------------- CAROUSEL----------------------------- -->

        <section aria-label="Selected Projects" class="gallery">
            <div class="carousel" data-carousel>
                <button class="carousel-button left" data-carousel-button="left"><img src="./img/prev.png"> </button>
                <button class="carousel-button right" data-carousel-button="right"><img src="./img/next.png"></button>
                <ul data-slides>
                    <li class="slide slide-absolute" data-active>
                        <div class="lens"></div>
                        <img id="featured" src="./img/senora_view1.png" alt="SEÑORA exhibion view no. 1">
                        <div class="caption">
                            <p>
                                SEÑORA exhibion view #<span class="numbers">1</span>
                            </p>
                        </div>
                    </li>
                    <li class="slide slide-absolute">
                        <div class="lens"></div>
                        <img src="./img/senora_view2.png" alt="SEÑORA exhibion view no. 2">
                        <div class="caption">
                            <p>
                                SEÑORA exhibion view #<span class="numbers">2</span>
                            </p>
                        </div>
                    </li>
                    <li class="slide slide-absolute">
                        <div class="lens"></div>
                        <img src="./img/senora_view3.png" alt="SEÑORA exhibion view no. 3">
                        <div class="caption">
                            <p>
                                Project picture #<span class="numbers">3</span>
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>

        <!-- ---------------------------- ABOUT ----------------------------- -->

        <section id="about" class="project-overview">
        <div class="main">
            <p>
                People ask, Where did she come from? <br>
                SEÑORA was born in Venice. She’s an idea of WOMAN. An ideal WOMAN. She improves with age.
                People ask, What is she like? <br>
                She can take many forms. Individually She has as many faces as she has moods. As many aspects as the weather. SEÑORA is an ancient ride, shifts shapes and gears. Picks up a hitchhiker and turns up the laughter. <br>
                Collectively she might be a film. She might be a magazine, she might be a concert or a very good club. She might be an exhibition. <br>
                SEÑORA! is a FORCE!
            </p>
            <p>
                The installation is presented in Tallinn, Temnikova & Kasela Gallery
            </p>
        </div>
        <div class="spacer-64"></div>
        <!-- TODO: Calculate how many spacers we need by tags container height -->

        <div class="tags-container">
            <div class="tags general-content">
                <div class="tag-row">
                    <div class="tag-title">
                        year:
                    </div>
                    <div class="tag-content">
                        2020
                    </div>
                </div>

                <div class="tag-row">
                    <div class="tag-title">
                        technique:
                    </div>
                    <div class="tag-content">
                        Tibetan Hand-knotting Hand-dyed in abrash technique quality: Approx 125.000 knots / sqm
                    </div>
                </div>

                <div class="tag-row">
                    <div class="tag-title">
                        produced in:
                    </div>
                    <div class="tag-content">
                        Kathmandu, Nepal
                    </div>
                </div>

                <div class="tag-row">
                    <div class="tag-title">
                        materials:
                    </div>
                    <div class="tag-content">
                        Hand-spun Himalayan wool, silk
                    </div>
                </div>

                <div class="tag-row">
                    <div class="tag-title">
                        size:
                    </div>
                    <div class="tag-content">
                        variable dimensions
                    </div>
                </div>

                <div class="tag-row">
                    <div class="tag-title">
                        photo:
                    </div>
                    <div class="tag-content">
                        Ankit Shakya
                    </div>
                </div>
            </div>
        </div>
        </section>
        <script src="./assets/js/zoom.js" defer></script>
    </body>
</html>
