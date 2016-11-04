<?php
/**
 * The header for our theme.
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package Empo_tools
 */

?><!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
<meta charset="<?php bloginfo( 'charset' ); ?>">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title><?php wp_title(); ?></title>
<link rel="profile" href="http://gmpg.org/xfn/11">
<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
 <div class="short_menu">
                <div class="basket">
                    <p>В КОРЗИНЕ:</p>
                    <p>0 ТОВАРОВ</p>
                    <p>НА СУМУ</p>
                    <p>0 РУБ</p>
                 </div>
                 <ul class="right_menu">
                      <li><a href="#"></a></li>
                      <li><a href="#"></a></li>
                      <li><a href="#"></a></li>
                      <li><a href="#"></a></li>
                      <li><a href="#"></a></li>
                      <li><a href="#"></a></li>
                      <li><a href="#"></a></li>
                      <li><a href="#"></a></li>
                      <li><a href="#"></a></li>
                      <li><a href="#"></a></li>
                      <li><a href="#"></a></li>
                      <li><a href="#"></a></li>
                      <li><a href="#"></a></li>
                      <li><a href="#"></a></li>
                      <li><a href="#"></a></li>
                 </ul>
            </div>
            <header>
                <div class="nav_background">
                   <div class="nav">
                       <?php 
                        wp_nav_menu( array(
                            'menu'=>'Главное меню',
                            'menu_class'=>'menu',
                            'container'=>'li',
                            'after'=>' /'
                        ) );
                       wp_nav_menu( array(
                            'menu'=>'Меню входа/регистрации',
                            'menu_class'=>'reg_menu',
                            'container'=>'li',
                            'after'=>' /'
                        ) );
                        ?>
                    </div>
                </div>
                <div class="second_nav_background">
                <div class="second_nav">
                <section class="info">
                        <div class="catalog">
                           <a class="logo">
                           </a>
                          <p id="catalog">  КАТАЛОГ ТОВАРОВ </p>
                          <ul id="goodsCatalog" class="goods_catalog">
                            <?php   
                                    $args=array(
                                        'orderby' => 'ID',
                                        'order' => 'ASC',
                                        'hide_empty' => '0'
                                    );
                                    $categories=get_categories($args);
                                      foreach($categories as $category) {
                                        echo '<li> <a href="#">' . $category->name.'</a> </p> ';
                                       }
                                    ?>
                            </ul>
                            <div id="catArrowWrapper"><img id="catalogArrow" src=" <?php echo get_template_directory_uri() . '/img/catalog_arrow.png '?> " alt=""></div>
                         </div>
                         
                         <?php 
                        wp_nav_menu( array(
                            'menu'=>'Информ-меню',
                            'menu_class'=>'info_menu',
                            'container'=>'li',
                            'after'=>' /'
                        ) );
                        ?>
                 </section>
                <div class="contacts_status_wrapper">
                <div class="contacts">
                    <p><i>skype</i> 320volt</p>
                    <p><i>Email</i> 320volt@mail.ru</p>
                </div>
                <div class="status">
                    ПРОВЕРИТЬ СТАТУС ЗАКАЗА
                </div>
                <div class="tell_about_us">
                    <p class="tell_friends">
                        РАСCКАЗАТЬ ДРУЗЬЯМ:
                    </p>
                    <div class="networks_ico_wrapper">
                        <a href="#" class="vk_link"></a>
                        <a href="#" class="ok_link"></a>
                        <a href="#" class="fb_link"></a>
                    </div>
                </div>
                </div>
                <div class="call_us">
                    <p class="phone_number">
                        8 (800) 333-9-220
                    </p>
                    <p class="about_number">
                        БЕСПЛАТНЫЙ ЗВОНОК ПО РОССИИ
                    </p>
                    <div class="call_back">
                        ЗАКАЗАТЬ ОБРАТНЫЙ ЗВОНОК
                    </div>
                </div>


                    <div class="search_box">
                    <input placeholder="ПОИСК ПО САЙТУ" type="search">
                    <button id="search">ПОИСК</button>
                    </div>

                  </div>
               </div>
            </header>