<?php
/**
 * The template for displaying the footer.
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package Empo_tools
 */

?>
            </article>
            <footer>
                <section class="pay_types">
                    <img src='<?php echo get_template_directory_uri() . "/img/pay_type.jpg" ?>' alt="" usemap="#map_paytypes" />
                    <map name="map_paytypes">
                        <area alt="" target="_blank" title="" href="http://www.visa.com.ua/" shape="poly" coords="12,7,51,7,52,23,13,23" />
                        <area alt="" target="_blank" title="" href="https://qiwi.com/" shape="poly" coords="54,4,78,4,78,25,56,24" />
                        <area alt="" target="_blank" title="" href="http://www.mastercard.com/" shape="poly" coords="12,41,45,40,46,62,12,62" />
                        <area alt="" target="_blank" title="" href="www.sberbank.ua" shape="poly" coords="49,41,70,41,70,61,48,61" />
                        <area alt="" target="_blank" title="" href="https://www.capitaller.ru" shape="poly" coords="11,73,82,73,82,92,11,92" />
                        <area alt="" target="_blank" title="" href="https://money.yandex.ru" shape="poly" coords="83,126,12,125,12,102,83,102" />
                    </map>
                </section>
                     <section class="connection_types">
                    <ul class="networks_links">
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                    <p class="subscribe_news">
                        Подпишись на новости
                    </p>
                    <input type="email" placeholder="E-mail">
                    <button id='subscraibeNews'>ПОДПИСАТЬСЯ</button>
                    <p class="copyright_text">&copy; 2002 - 2014 "220 Вольт".</p>
                    <p class="who_is_we">Сеть магазинов электроинструмента</p>
                </section>
                <section class="nav_info">
                    <ul class="help_info">
                        <li><a href="">Сервис</a></li>
                        <li><a href="">Вакансии</a></li>
                        <li><a href="">Мобильная версия</a></li>
                        <li><a href="">Лабаратория подарка</a></li>
                    </ul>
                    <ul class="codex_info">
                        <li><a href="">Правила торговли</a></li>
                        <li><a href="">Наш рекорд Гиннесса</a></li>
                        <li><a href="">Статьи</a></li>
                        <li><a href="">Политика Конфиденциальности</a></li>
                    </ul>
                    <ul class="helpful_info">
                        <li><a href="">Советы по выбору</a></li>
                        <li><a href="">Полезные расчеты</a></li>
                        <li><a href="">Отзывы</a></li>
                        <li><a href="">Дополнительная гарантия</a></li>
                    </ul>

                    <div class="market_links">
                        <img src='<?php echo get_template_directory_uri() . "/img/market_links.jpg" ?>' alt="" usemap="#map_market" />
                        <map name="map_market">
                            <area alt="" title="" href="#" shape="poly" coords="5,10,98,10,98,38,5,38" />
                            <area alt="" title="" href="#" shape="poly" coords="111,10,204,10,204,38,111,38" />
                            <area alt="" title="" href="#" shape="poly" coords="217,10,310,10,310,38,217,38" />
                            <area alt="" title="" href="#" shape="poly" coords="337,3,338,39,420,39,420,3" />
                            <area alt="" title="" href="#" shape="poly" coords="456,10,595,10,595,38,456,38" />
                        </map>
                    </div>
                    <p class="site_info">
                        Информация на сайте www.220-volt.ru не является публичной офертой. Указаные цены действуют только при оформлении заказа через интернет-магазин www.220-volt.ru.
                    </p>
                    <p class="if_mistake">
                        Обнаружив ошибку или неточность в тексте или описании товара, выделите ее и нажмите Shift+Enter.
                    </p>
                </section>
           
            </footer>
           </div>
        </div>

<?php wp_footer(); ?>

    </body>
</html>
