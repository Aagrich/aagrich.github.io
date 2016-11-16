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
                         <?php 
                        $args = array(
                        'numberposts'  => -1,
                        'offset'          =>  0,
                        'category'        =>  25,
                        'orderby'         => 'ID',
                        'order'           => 'DESC',
                        'post_type'       => 'post',
                        'post_status'     => 'publish'
                                );
                         $posts = get_posts($args);
                         foreach($posts as $post) {
                                setup_postdata($post);
                                $good_id   = $post->ID;
                                $discount = get_post_meta($good_id, 'discount', true);
                                $price = get_post_meta($good_id, 'discount_price', true);
                                $old_price = get_post_meta($good_id, 'old_price', true);
                                $description = get_post_meta($good_id, 'description', true);
                                $goods_type = get_post_meta($good_id, 'goods_type', true);
                                $img_id  = get_post_meta($good_id, 'uploader_custom', true);
                                $img_link = wp_get_attachment_image_url($img_id, full);
                                ?>
                                <section class="top_slide" style="background-image: url(<?php echo $img_link ?>)"> 
                                    <?php echo the_title('<p class="goods_name">' , '</p>') ?> 
                                    <div class="discount"> <?php echo '-' .  $discount . '%' ?> </div>
                                    <p class="new_price"> <?php echo $price . ' р' ?> </p>
                                    <p class="old_price"> <?php echo $old_price . ' р' ?> </p>
                                </section>
                                <?php
                             }
                             wp_reset_postdata();
                            ?>

                </div>
                <ul id="navRounds" class="rounds_wrapper">
                </ul>
                    <section class="sub_slider_viewer">
                <ul class="sub_slider">
                       <?php 
                        $args = array(
                        'numberposts'  => 3,
                        'offset'          =>  0,
                        'category'        =>  27,
                        'orderby'         => 'ID',
                        'order'           => 'DESC',
                        'post_type'       => 'post',
                        'post_status'     => 'publish'
                                );
                         $posts = get_posts($args);
                         foreach($posts as $post) {
                                setup_postdata($post);
                                $good_id   = $post->ID;
                                $discount = get_post_meta($good_id, 'discount', true);
                                $price = get_post_meta($good_id, 'discount_price', true);
                                $old_price = get_post_meta($good_id, 'old_price', true);
                                $description = get_post_meta($good_id, 'description', true);
                                $goods_type = get_post_meta($good_id, 'goods_type', true);
                                $img_id  = get_post_meta($good_id, 'uploader_custom', true);
                                $img_link = wp_get_attachment_image_url($img_id, full);
                                ?>
                                    <li>
                                        <p class="stock">Акция</p>
                                        <?php echo the_title('<p class="stock_goods_name">' , '</p>') ?>
                                        <p class="goods_type"><?php echo $goods_type ?> </p>
                                        <p class="stock_old_price"><?php echo $old_price . ' р' ?></p>
                                        <p class="stock_new_price"><?php echo $price . ' р' ?></p>
                                        <img src="<?php echo $img_link ?>" alt="<?php echo $description ?>">
                                        <p class="tech_info"><?php echo $description ?></p>
                                        <button>В КОРЗИНУ</button>
                                    </li>
                                <?php
                             }
                             wp_reset_postdata();
                            ?>
                </ul>
            </article>
            <article class="main_sliders">
               <section id="brandWrapper" class="brand_wrapper">
                 <h5>НАШИ ПАРТНЕРЫ</h5>
                  <div class="brand_viewer">
                  <button id="brandLt" class="brand_button_left">&lt;</button>
                  <button id="brandGt" class="brand_button_right">&gt;</button>
                   <ul id='brandSlider' class="brand_slider">
                                              <?php 
                        $args = array(
                        'numberposts'  => -1,
                        'offset'          =>  0,
                        'category'        =>  28,
                        'orderby'         => 'ID',
                        'order'           => 'DESC',
                        'post_type'       => 'post',
                        'post_status'     => 'publish'
                                );
                         $posts = get_posts($args);
                         foreach($posts as $post) {
                                setup_postdata($post);
                                $good_id   = $post->ID;
                                $img_id  = get_post_meta($good_id, 'uploader_custom', true);
                                $img_link = wp_get_attachment_image_url($img_id, full);
                                ?>
                                    <li style="background-image: url(<?php echo $img_link ?>)">
                                    </li>
                                <?php
                             }
                             wp_reset_postdata();
                            ?>
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
                    <?php 
                            $args = array(
                        'posts_per_page'  => -1,
                        'offset'          =>  0,
                        'tax_query' => array(
                            array(
                                'taxonomy' => 'goods_list_tax',
                                'field'    => 'id',
                                'terms'    => array(5,4)
                            )
                        ),
                        'orderby'         => 'ID',
                        'order'           => 'DESC',
                        'post_type'       => 'goods_list',
                        'post_status'     => 'publish'
                                );
                         $query = new WP_Query;
                         $posts = $query->query($args);
                         foreach($posts as $post) {
                                setup_postdata($post);
                                $good_id   = $post->ID;
                                $price = get_post_meta($good_id, 'price', true);
                                $old_price = get_post_meta($good_id, 'old_price', true);
                                $good_name = get_post_meta($good_id, 'good_name', true);
                                $img_id  = get_post_meta($good_id, 'uploader_custom', true);
                                $img_link = wp_get_attachment_image_url($img_id);
                                                          
                                echo '<li style="background-image:' . 'url('.  $img_link .  ')' . ' ">' .
                                    '<h6>' . $good_name . '</h6>' .
                                    '<button value=' . $good_id . '> В КОРЗИНУ </button>' .
                                    '<div class="price">
                                       <p class="goods_old_price">' .
                                            $old_price . ' р' .
                                       '</p> 
                                       <p class="goods_price">' .
                                          $price . ' р' .
                                       '</p>
                                       </div>                      
                                    </li>' ;
                             }
                             wp_reset_postdata();
                            ?>
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
                        'posts_per_page'  => -1,
                        'offset'          =>  0,
                        'tax_query' => array(
                            array(
                                'taxonomy' => 'goods_list_tax',
                                'field'    => 'id',
                                'terms'    => 4
                            )
                        ),
                        'orderby'         => 'ID',
                        'order'           => 'DESC',
                        'post_type'       => 'goods_list',
                        'post_status'     => 'publish'
                                );
                        $query = new WP_Query;
                        $posts = $query->query($args);
                         foreach($posts as $post) {
                                setup_postdata($post);
                                $good_id   = $post->ID;
                                $price = get_post_meta($good_id, 'price', true);
                                $old_price = get_post_meta($good_id, 'old_price', true);
                                $good_name = get_post_meta($good_id, 'good_name', true);
                                $img_id  = get_post_meta($good_id, 'uploader_custom', true);
                                $img_link = wp_get_attachment_image_url($img_id);
                                                          
                                echo '<li style="background-image:' . 'url('.  $img_link .  ')' . ' ">' .
                                    '<h6>' . $good_name . '</h6>' .
                                    '<button value=' . $good_id . '> В КОРЗИНУ </button>' .
                                    '<div class="price">
                                       <p class="goods_old_price">' .
                                            $old_price . ' р' .
                                       '</p> 
                                       <p class="goods_price">' .
                                          $price . ' р' .
                                       '</p>
                                       </div>                      
                                    </li>' ;
                             }
                            wp_reset_postdata();
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
                    <?php 
                        $args = array(
                        'posts_per_page'  => -1,
                        'offset'          =>  0,
                        'tax_query' => array(
                            array(
                                'taxonomy' => 'goods_list_tax',
                                'field'    => 'id',
                                'terms'    => 5
                            )
                        ),
                        'orderby'         => 'ID',
                        'order'           => 'DESC',
                        'post_type'       => 'goods_list',
                        'post_status'     => 'publish'
                                );
                        $query = new WP_Query;
                        $posts = $query->query($args);
                         foreach($posts as $post) {
                                setup_postdata($post);
                                $good_id   = $post->ID;
                                $price = get_post_meta($good_id, 'price', true);
                                $old_price = get_post_meta($good_id, 'old_price', true);
                                $good_name = get_post_meta($good_id, 'good_name', true);
                                $img_id  = get_post_meta($good_id, 'uploader_custom', true);
                                $img_link = wp_get_attachment_image_url($img_id);
                                                          
                                echo '<li style="background-image:' . 'url('.  $img_link .  ')' . ' ">' .
                                    '<h6>' . $good_name . '</h6>' .
                                    '<button value=' . $good_id . '> В КОРЗИНУ </button>' .
                                    '<div class="price">
                                       <p class="goods_old_price">' .
                                            $old_price . ' р' .
                                       '</p> 
                                       <p class="goods_price">' .
                                          $price . ' р' .
                                       '</p>
                                       </div>                      
                                    </li>' ;
                             }
                            wp_reset_postdata();
                            ?>
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
                       <?php if(function_exists('fetch_feed')) {
        
                            include_once(ABSPATH . WPINC . '/feed.php'); // the file to rss feed generator
                            $link = get_site_url() . '/feed';
                            $feed = fetch_feed($link); // specify the rss feed 

                            $limit = $feed->get_item_quantity(2); // specify number of items
                            $items = $feed->get_items(0, $limit); // create an array of items

                        }
                        if ($limit == 0) echo '<div>Статьи временно отсутствуют</div>';
                        else foreach ($items as $item) : ?>
                        <li>
                        <a class="article_header" href="<?php echo $item->get_permalink(); ?>" alt="<?php echo $item->get_title(); ?>">
                        <?php echo $item->get_title(); ?> </a>
                        <p class="article_text"><?php echo substr($item->get_description(), 0, 200); ?> ...</p>
                        </li>
                        <?php endforeach; ?>

                    </ul>
                    </section>
                    <section class="twitter_messages">
                    <h4>Лента Twitter</h4> 
                    <ul>
                    <a class="twitter-timeline" href="https://twitter.com/220volt230">Tweets by 220volt230</a> <script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>
                    </ul>   
                    </section>
                    <section class="our_video">
                    <h4>Наши видеообзоры</h4> 
                        <?php
                            global $youtubevideo;
                                 $args = array(
                                'numberposts'     => 2, 
                                'offset'          => 0,
                                'category'        => 23,
                                'orderby'         => 'ID',
                                'order'           => 'DESC',
                                'post_type'       => 'post',
                                'post_status'     => 'publish'
                                     );
                            $myvideos = get_posts($args);
                            foreach( $myvideos as $youtubevideo ){
                                setup_postdata( $youtubevideo );
                                $myvideo_id = $youtubevideo->ID;
                                $link = get_the_content() . "0";
                                $id_position = strpos($link, '=') + 1;
                                $video_id = substr($link, $id_position, -1);
                                $author = get_the_author();
                                ?>
                                <div class="video_info">
                                    <a id="playVideo" style="background-image: url(http://img.youtube.com/vi/<?php echo $video_id ?>/mqdefault.jpg)" class="video_thumbnail" >
                                    <div class="video_button" <?php echo "onclick='countViews(" . $myvideo_id . ")'" ?> ><div class="video_triangle"><div class="video_wrapper"><div class="video_viewer"><?php the_content() ?></div></div></div></div>
                                    </a>
                                    <?php echo the_title('<p class="video_name">', '</p>') ?> 
                                    <p class="video_viewers"><?php echo getPostViews($myvideo_id); ?></p>
                                    <p class="video_author"> <?php echo $author ?> </p>
                                </div>
                              <?php 
                            }
                            wp_reset_postdata();
                            ?>
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

