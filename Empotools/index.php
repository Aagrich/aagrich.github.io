<?php
/**
 * The main template file.
 *
 * This is the most generic template file in a WordPress theme
 * and one of the two required files for a theme (the other being style.css).
 * It is used to display a page when nothing more specific matches a query.
 * E.g., it puts together the home page when no home.php file exists.
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 * @package Empo_tools
 */

get_header(); ?>
          
           
            <div class="main_background">
        <div class="wrapper">    
            <article id="topSlider"  class="top_slider_viewer">
               <div id="slider"  class="top_slider">
                <section class="top_slide">
                    <p class="goods_name">БЕНЗОПИЛА ДРУЖБА</p>
                    <div class="discount"> - 50%</div>
                    <p class="new_price">3500 р</p>
                    <p class="old_price">5500 р</p>
                </section>
                <section class="top_slide">
                    <p class="goods_name">БЕНЗОПИЛА ДРУЖБА 2</p>
                    <div class="discount"> - 50%</div>
                    <p class="new_price">2500 р</p>
                    <p class="old_price">4500 р</p>
                </section>
                <section class="top_slide">
                    <p class="goods_name">БЕНЗОПИЛА ДРУЖБА 3</p>
                    <div class="discount"> - 50%</div>
                    <p class="new_price">3500 р</p>
                    <p class="old_price">6500 р</p>
                </section>
                </div>
                <ul id="navRounds" class="rounds_wrapper">
                </ul>
                    <section class="sub_slider_viewer">
                <ul class="sub_slider">
                    <li>
                        <p class="stock">Акция</p>
                        <p class="stock_goods_name">DDE V500II ТРОЛЛЬ </p>
                        <p class="goods_type">Бензиновый культиватор</p>
                        <p class="stock_old_price">18169 р.</p>
                        <p class="stock_new_price">14 715 р.</p>
                        <img src='<?php echo get_template_directory_uri() . "/img/troll.jpg" ?>' alt="Бензиновый культиватор ТРОЛЛЬ">
                        <p class="tech_info">5.5лс 190см3 B&S шир.захв.50см глуб.25см ск.1 42кг</p>
                         <button>В КОРЗИНУ</button>
                    </li>
                    <li>
                         <p class="stock">Акция</p>
                        <p class="stock_goods_name">DDE V500II ТРОЛЛЬ </p>
                        <p class="goods_type">Бензиновый культиватор</p>
                        <p class="stock_old_price">18169 р.</p>
                        <p class="stock_new_price">14 715 р.</p>
                        <img src='<?php echo get_template_directory_uri() . "/img/troll.jpg" ?>' alt="Бензиновый культиватор ТРОЛЛЬ">
                        <p class="tech_info">5.5лс 190см3 B&S шир.захв.50см глуб.25см ск.1 42кг</p>
                         <button>В КОРЗИНУ</button>
                    </li>
                    <li>
                         <p class="stock">Акция</p>
                        <p class="stock_goods_name">DDE V500II ТРОЛЛЬ </p>
                        <p class="goods_type">Бензиновый культиватор</p>
                        <p class="stock_old_price">18169 р.</p>
                        <p class="stock_new_price">14 715 р.</p>
                        <img src='<?php echo get_template_directory_uri() . "/img/troll.jpg" ?>' alt="Бензиновый культиватор ТРОЛЛЬ">
                        <p class="tech_info">5.5лс 190см3 B&S шир.захв.50см глуб.25см ск.1 42кг</p>
                         <button>В КОРЗИНУ</button>
                    </li>
                </ul>
            </article>
            <article class="main_sliders">
               <section id="brandWrapper" class="brand_wrapper">
                 <h5>НАШИ ПАРТНЕРЫ</h5>
                  <div class="brand_viewer">
                  <button id="brandLt" class="brand_button_left">&lt;</button>
                  <button id="brandGt" class="brand_button_right">&gt;</button>
                   <ul id='brandSlider' class="brand_slider">
                       <li></li>
                       <li></li>
                       <li></li>
                       <li></li>
                       <li></li>
                       <li></li>
                       <li></li>
                       <li></li>
                       <li></li>
                       <li></li>
                       <li></li>
                       <li></li>
                   </ul>
                  </div>
               </section>
               <section class="goods_wrapper">
                 <h5>ЛИДЕРЫ ПРОДАЖ</h5>
                  <div id="liderViewer" class="goods_viewer">
                  <div class="wrapper_button_left">
                      <button class="goods_button_left">&lt;</button>
                  </div>
                  <div class="wrapper_button_right">
                      <button class="goods_button_right">&gt;</button>    
                  </div>
                   <ul id='sailsLider' class="goods_slider">
                       <li>
                           <h6>PHILIPS HD3033/00</h6>
                           <button>В КОРЗИНУ</button>
                           <div class="price">
                           <p class="goods_old_price">
                               5500 р
                           </p>
                           <p class="goods_price">
                               3500 р
                           </p>
                           </div>
                       </li>
                       <li>
                           <h6>PHILIPS HD3033/00</h6>
                           <button>В КОРЗИНУ</button>
                           <div class="price">
                           <p class="goods_old_price">
                               5500 р
                           </p>
                           <p class="goods_price">
                               3500 р
                           </p>
                           </div>
                       </li>
                       <li>
                           <h6>PHILIPS HD3033/00</h6>
                           <button>В КОРЗИНУ</button>
                           <div class="price">
                           <p class="goods_old_price">
                               5500 р
                           </p>
                           <p class="goods_price">
                               3500 р
                           </p>
                           </div>
                       </li>
                       <li>
                           <h6>PHILIPS HD3033/00</h6>
                           <button>В КОРЗИНУ</button>
                           <div class="price">
                           <p class="goods_old_price">
                               5500 р
                           </p>
                           <p class="goods_price">
                               3500 р
                           </p>
                           </div>
                       </li>
                       <li>
                           <h6>PHILIPS HD3033/00</h6>
                           <button>В КОРЗИНУ</button>
                           <div class="price">
                           <p class="goods_old_price">
                               5500 р
                           </p>
                           <p class="goods_price">
                               3500 р
                           </p>
                           </div>
                       </li>
                       <li>
                           <h6>PHILIPS HD3033/00</h6>
                           <button>В КОРЗИНУ</button>
                           <div class="price">
                           <p class="goods_old_price">
                               5500 р
                           </p>
                           <p class="goods_price">
                               3500 р
                           </p>
                           </div>
                       </li>
                       <li>
                           <h6>PHILIPS HD3033/00</h6>
                           <button>В КОРЗИНУ</button>
                           <div class="price">
                           <p class="goods_old_price">
                               5500 р
                           </p>
                           <p class="goods_price">
                               3500 р
                           </p>
                           </div>
                       </li>
                       <li>
                           <h6>PHILIPS HD3033/00</h6>
                           <button>В КОРЗИНУ</button>
                           <div class="price">
                           <p class="goods_old_price">
                               5500 р
                           </p>
                           <p class="goods_price">
                               3500 р
                           </p>
                           </div>
                       </li>
                       <li>
                           <h6>PHILIPS HD3033/00</h6>
                           <button>В КОРЗИНУ</button>
                           <div class="price">
                           <p class="goods_old_price">
                               5500 р
                           </p>
                           <p class="goods_price">
                               3500 р
                           </p>
                           </div>
                       </li>
                       <li>
                           <h6>PHILIPS HD3033/00</h6>
                           <button>В КОРЗИНУ</button>
                           <div class="price">
                           <p class="goods_old_price">
                               5500 р
                           </p>
                           <p class="goods_price">
                               3500 р
                           </p>
                           </div>
                       </li>
                       <li>
                           <h6>PHILIPS HD3033/00</h6>
                           <button>В КОРЗИНУ</button>
                           <div class="price">
                           <p class="goods_old_price">
                               5500 р
                           </p>
                           <p class="goods_price">
                               3500 р
                           </p>
                           </div>
                       </li>
                       <li>
                           <h6>PHILIPS HD3033/00</h6>
                           <button>В КОРЗИНУ</button>
                           <div class="price">
                           <p class="goods_old_price">
                               5500 р
                           </p>
                           <p class="goods_price">
                               3500 р
                           </p>
                           </div>
                       </li>
                   </ul>
                  </div>
               </section>
                  <section class="goods_wrapper">
                 <h5>Электротовары</h5>
                  <div id="electroViewer" class="goods_viewer">
                   <div class="wrapper_button_left">
                      <button class="goods_button_left">&lt;</button>
                  </div>
                  <div class="wrapper_button_right">
                      <button class="goods_button_right">&gt;</button>    
                  </div>
                   <ul id="electroGoods" class="goods_slider">
                        <?php 
                            $args = array(
                        'numberposts'     => -1, 
                        'offset'          => 0,
                        'category'        => '',
                        'orderby'         => 'ID',
                        'order'           => 'DESC',
                        'post_type'       => 'goods_list',
                        'post_status'     => 'publish'
                                );
                         $posts = get_posts($args);
                         foreach($posts as $post) {
                                setup_postdata($post);
                                $good_id   = $post->ID;
                                $price = get_post_meta($good_id, 'price', true);
                                $old_price = get_post_meta($good_id, 'old_price', true);
                                $good_name = get_post_meta($good_id, 'good_name', true);
                                $img_id  = get_post_meta($good_id, 'uploader_custom', true);
                                $upload_dir = wp_get_upload_dir();
                                $img_link = wp_get_attachment_image_url($img_id);
                                                          
                                echo '<li style="background-image:' . 'url('.  $img_link .  ')' . ' ">' .
                                    '<h6>' . $good_name . '</h6>' .
                                    '<button value=' . $good_id . '> В КОРЗИНУ </button>' .
                                    '<div class="price">
                                       <p class="goods_old_price">' .
                                            $old_price .
                                       '</p> 
                                       <p class="goods_price">' .
                                          $price .
                                       '</p>
                                       </div>                      
                                    </li>' ;
                             }
                            ?>
                   </ul>
                  </div>
               </section>
                  <section class="goods_wrapper">
                 <h5>Все для сада</h5>
                  <div id="gardenViewer" class="goods_viewer">
                   <div class="wrapper_button_left">
                      <button class="goods_button_left">&lt;</button>
                  </div>
                  <div class="wrapper_button_right">
                      <button class="goods_button_right">&gt;</button>    
                  </div>
                   <ul id="gardenGoods" class="goods_slider">
                       <li>
                           <h6>PHILIPS HD3033/00</h6>
                           <button>В КОРЗИНУ</button>
                           <div class="price">
                           <p class="goods_old_price">
                               5500 р
                           </p>
                           <p class="goods_price">
                               3500 р
                           </p>
                           </div>
                       </li>
                       <li>
                           <h6>PHILIPS HD3033/00</h6>
                           <button>В КОРЗИНУ</button>
                           <div class="price">
                           <p class="goods_old_price">
                               5500 р
                           </p>
                           <p class="goods_price">
                               3500 р
                           </p>
                           </div>
                       </li>
                       <li>
                           <h6>PHILIPS HD3033/00</h6>
                           <button>В КОРЗИНУ</button>
                           <div class="price">
                           <p class="goods_old_price">
                               5500 р
                           </p>
                           <p class="goods_price">
                               3500 р
                           </p>
                           </div>
                       </li>
                       <li>
                           <h6>PHILIPS HD3033/00</h6>
                           <button>В КОРЗИНУ</button>
                           <div class="price">
                           <p class="goods_old_price">
                               5500 р
                           </p>
                           <p class="goods_price">
                               3500 р
                           </p>
                           </div>
                       </li>
                       <li>
                           <h6>PHILIPS HD3033/00</h6>
                           <button>В КОРЗИНУ</button>
                           <div class="price">
                           <p class="goods_old_price">
                               5500 р
                           </p>
                           <p class="goods_price">
                               3500 р
                           </p>
                           </div>
                       </li>
                       <li>
                           <h6>PHILIPS HD3033/00</h6>
                           <button>В КОРЗИНУ</button>
                           <div class="price">
                           <p class="goods_old_price">
                               5500 р
                           </p>
                           <p class="goods_price">
                               3500 р
                           </p>
                           </div>
                       </li>
                       <li>
                           <h6>PHILIPS HD3033/00</h6>
                           <button>В КОРЗИНУ</button>
                           <div class="price">
                           <p class="goods_old_price">
                               5500 р
                           </p>
                           <p class="goods_price">
                               3500 р
                           </p>
                           </div>
                       </li>
                       <li>
                           <h6>PHILIPS HD3033/00</h6>
                           <button>В КОРЗИНУ</button>
                           <div class="price">
                           <p class="goods_old_price">
                               5500 р
                           </p>
                           <p class="goods_price">
                               3500 р
                           </p>
                           </div>
                       </li>
                       <li>
                           <h6>PHILIPS HD3033/00</h6>
                           <button>В КОРЗИНУ</button>
                           <div class="price">
                           <p class="goods_old_price">
                               5500 р
                           </p>
                           <p class="goods_price">
                               3500 р
                           </p>
                           </div>
                       </li>
                       <li>
                           <h6>PHILIPS HD3033/00</h6>
                           <button>В КОРЗИНУ</button>
                           <div class="price">
                           <p class="goods_old_price">
                               5500 р
                           </p>
                           <p class="goods_price">
                               3500 р
                           </p>
                           </div>
                       </li>
                       <li>
                           <h6>PHILIPS HD3033/00</h6>
                           <button>В КОРЗИНУ</button>
                           <div class="price">
                           <p class="goods_old_price">
                               5500 р
                           </p>
                           <p class="goods_price">
                               3500 р
                           </p>
                           </div>
                       </li>
                       <li>
                           <h6>PHILIPS HD3033/00</h6>
                           <button>В КОРЗИНУ</button>
                           <div class="price">
                           <p class="goods_old_price">
                               5500 р
                           </p>
                           <p class="goods_price">
                               3500 р
                           </p>
                           </div>
                       </li>
                   </ul>
                  </div>
               </section>
                
            </article>
            <article class="about_us" id='aboutUs'>
                <div class="about_us_wrapper">
                    <h3>КОРОТКО О НАШЕМ МАГАЗИНЕ</h3>
                    <section class="articles">
                    <h4>Статьи</h4>
                    <ul>
                        <li>
                            <p class="article_header">
                                Как работать с подмотями
                            </p>
                            <p class="article_text">
                                Чтобы понять, что такое подмости, достаточно вспомнить строительные леса. И то и другое - своего рода лестницы для...
                            </p>
                        </li>
                        <li>  
                            <p class="article_header">
                                Как выбрать вышку тура
                            </p>
                            <p class="article_text">
                                При ремонте потолка и отделке стен обычной лестницей-стремянкой не обойтись. ВО-первых, ее высота может оказаться...
                            </p>
                        </li>
                    </ul>
                    </section>
                    <section class="twitter_messages">
                    <h4>Лента Twitter</h4> 
                    <ul>
                        <li>
                            <p class="twitter_name">@220_volt_ru</p>
                            <p class="twitter_date"> 7 Августа</p>
                            <p class="twitter_text">
                                Ждём всех на #harleydays!
                                Заряжаем фест музыкой! http://t...
                            </p>
                            <a class="twitter_answer">Ответить</a>
                        </li>
                        <li>
                            <p class="twitter_name">@220_volt_ru</p>
                            <p class="twitter_date"> 7 Августа</p>
                            <p class="twitter_text">
                                Ждём всех на #harleydays!
                                Заряжаем фест музыкой! http://t...
                            </p>
                            <a class="twitter_answer">Ответить</a>
                        </li>
                        <li>
                            <p class="twitter_name">@220_volt_ru</p>
                            <p class="twitter_date"> 7 Августа</p>
                            <p class="twitter_text">
                                Ждём всех на #harleydays!
                                Заряжаем фест музыкой! http://t...
                            </p>
                            <a class="twitter_answer">Ответить</a>
                        </li>
                        <li>
                            <p class="twitter_name">@220_volt_ru</p>
                            <p class="twitter_date"> 7 Августа</p>
                            <p class="twitter_text">
                                Ждём всех на #harleydays!
                                Заряжаем фест музыкой! http://t...
                            </p>
                            <a class="twitter_answer">Ответить</a>
                        </li>
                    </ul>   
                    </section>
                    <section class="our_video">
                    <h4>Наши видеообзоры</h4>  
                    <div class="video_info">
                        <p class="video_name">Уровень FIT 18420 "Модерн"</p>
                        <p class="video_viewers">Просмотрено 23</p>
                        <p class="video_author">220volt220</p>
                    </div>
                    <div class="video_info">
                        <p class="video_name">Уровень FIT 18420 "Модерн"</p>
                        <p class="video_viewers">Просмотрено 23</p>
                        <p class="video_author">220volt220</p>
                    </div>    
                    </section>
                    <section class="our_shops">
                    <p class="our_shops_header">
                        Магазины "Эмпо-Тулс" в России
                    </p>
                    <div class="shops_citys">
                       <p id="shopsListButton">Все города</p>
                       <img class="citys_map" alt="RF map" src='<?php echo get_template_directory_uri() . "/img/map.png" ?>' >
                        <ul id="shopsCitysList">
                            <li><a href="#">Москва</a></li>
                            <li><a href="#">Санкт-Петербург</a></li>
                            <li><a href="#">Ростов-на-Дону</a></li>
                            <li><a href="#">Нижний Новгород</a></li>
                            <li><a href="#">Казань</a></li>
                            <li><a href="#">Уфа</a></li>
                            <li><a href="#">Самара</a></li>
                            <li><a href="#">Воронеж</a></li>
                            <li><a href="#">Великий Новгород</a></li>
                            <li><a href="#">Белгород</a></li>
                            <li><a href="#">Петрозаводск</a></li>
                            <li><a href="#">Новосибирск</a></li>
                            <li><a href="#">Смоленск</a></li>
                            <li><a href="#">Тула</a></li>
                            <li><a href="#">Екатеринбург</a></li>
                            <li><a href="#">Астрахань</a></li>
                            <li><a href="#">Иркустк</a></li>
                            <li><a href="#">Калуга</a></li>
                            <li><a href="#">Красноярск</a></li>
                            <li><a href="#">Челябинск</a></li>
                            <li><a href="#">Оренбург</a></li>
                            <li><a href="#">Ижевск</a></li>
                            <li><a href="#">Махачкала</a></li>
                            <li><a href="#">Варкута</a></li>
                            <li><a href="#">Магадан</a></li>
                            <li><a href="#">Нарильск</a></li>
                            <li><a href="#">Тикси</a></li>
                            <li><a href="#">Якутск</a></li>
                            <li><a href="#">Благовещенск</a></li>
                            <li><a href="#">Омск</a></li>
                            <li><a href="#">Саратов</a></li>
                            <li><a href="#">Краснодар</a></li>
                            <li><a href="#">Кислозаводск</a></li>
                            <li><a href="#">Ставрополь</a></li>
                            <li><a href="#">Курск</a></li>
                        </ul>
                    </div>    
                    </section>
                </div>

<?php

get_footer();

