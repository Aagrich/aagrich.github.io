<?php
/**
 * Empo tools functions and definitions.
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package Empo_tools
 */

if ( ! function_exists( 'empo_tools_setup' ) ) :
/**
 * Sets up theme defaults and registers support for various WordPress features.
 *
 * Note that this function is hooked into the after_setup_theme hook, which
 * runs before the init hook. The init hook is too late for some features, such
 * as indicating support for post thumbnails.
 */
function empo_tools_setup() {
	/*
	 * Make theme available for translation.
	 * Translations can be filed in the /languages/ directory.
	 * If you're building a theme based on Empo tools, use a find and replace
	 * to change 'empo-tools' to the name of your theme in all the template files.
	 */
	load_theme_textdomain( 'empo-tools', get_template_directory() . '/languages' );

	// Add default posts and comments RSS feed links to head.
	add_theme_support( 'automatic-feed-links' );

	/*
	 * Let WordPress manage the document title.
	 * By adding theme support, we declare that this theme does not use a
	 * hard-coded <title> tag in the document head, and expect WordPress to
	 * provide it for us.
	 */
	add_theme_support( 'title-tag' );

	/*
	 * Enable support for Post Thumbnails on posts and pages.
	 *
	 * @link https://developer.wordpress.org/themes/functionality/featured-images-post-thumbnails/
	 */
	add_theme_support( 'post-thumbnails' );

	// This theme uses wp_nav_menu() in one location.
	register_nav_menus( array(
		'primary' => esc_html__( 'Primary', 'empo-tools' ),
	) );

	/*
	 * Switch default core markup for search form, comment form, and comments
	 * to output valid HTML5.
	 */
	add_theme_support( 'html5', array(
		'search-form',
		'comment-form',
		'comment-list',
		'gallery',
		'caption',
	) );

	// Set up the WordPress core custom background feature.
	add_theme_support( 'custom-background', apply_filters( 'empo_tools_custom_background_args', array(
		'default-color' => 'ffffff',
		'default-image' => '',
	) ) );
}
endif;
add_action( 'after_setup_theme', 'empo_tools_setup' );

//  add goods list

if ( ! function_exists( 'goods_list_cp' ) ) {
 
    function goods_list_cp() {
 
        $labels = array(
            'name'                => _x( 'Товары', 'Post Type General Name', 'goods_list' ),
            'singular_name'       => _x( 'Товары', 'Post Type Singular Name', 'goods_list' ),
            'menu_name'           => __( 'Товары', 'goods_list' ),
            'parent_item_colon'   => __( 'Родительский:', 'goods_list' ),
            'all_items'           => __( 'Все товары', 'goods_list' ),
            'view_item'           => __( 'Просмотреть', 'goods_list' ),
            'add_new_item'        => __( 'Добавить новый Товар', 'goods_list' ),
            'add_new'             => __( 'Добавить новый', 'goods_list' ),
            'edit_item'           => __( 'Редактировать товар', 'goods_list' ),
            'update_item'         => __( 'Обновить товар', 'goods_list' ),
            'search_items'        => __( 'Найти товар', 'goods_list' ),
            'not_found'           => __( 'Не найдено', 'goods_list' ),
            'not_found_in_trash'  => __( 'Не найдено в удаленном', 'goods_list' ),
        );
        $args = array(
            'labels'              => $labels,
            'supports'            => array( 'title', 'excerpt', ),
            'taxonomies'          => array( 'goods_list_tax' ), 
            'public'              => true,
            'menu_position'       => 3,
            'menu_icon'           => 'dashicons-cart',
        );
        register_post_type( 'goods_list', $args );
 
    }
 
    add_action( 'init', 'goods_list_cp', 0 ); 
 
}


if ( ! function_exists( 'goods_list_tax' ) ) {
 
    function goods_list_tax() {
 
        $labels = array(
            'name'                       => _x( 'Категории Товаров', 'Taxonomy General Name', 'goods_list' ),
            'singular_name'              => _x( 'Категория Товара', 'Taxonomy Singular Name', 'goods_list' ),
            'menu_name'                  => __( 'Категории', 'goods_list' ),
            'all_items'                  => __( 'Категории', 'goods_list' ),
            'parent_item'                => __( 'Родительская категория Товаров', 'goods_list' ),
            'parent_item_colon'          => __( 'Родительская категория товара:', 'goods_list' ),
            'new_item_name'              => __( 'Новая категория', 'goods_list' ),
            'add_new_item'               => __( 'Добавить новую категорию', 'goods_list' ),
            'edit_item'                  => __( 'Редактировать категорию', 'goods_list' ),
            'update_item'                => __( 'Обновить категорию', 'goods_list' ),
            'search_items'               => __( 'Найти', 'goods_list' ),
            'add_or_remove_items'        => __( 'Добавить или удалить категорию', 'goods_list' ),
            'choose_from_most_used'      => __( 'Поиск среди лидеров продаж', 'goods_list' ),
            'not_found'                  => __( 'Не найдено', 'goods_list' ),
        );
        $args = array(
            'labels'                     => $labels,
            'hierarchical'               => true,
            'public'                     => true,
        );
        register_taxonomy( 'goods_list_tax', array( 'goods_list' ), $args );
 
    }
 
    add_action( 'init', 'goods_list_tax', 0 ); 
 
}

function goods_meta_box() {  
    add_meta_box(  
        'goods_meta_box', 
        'Информация о товаре', 
        'show_my_goods_metabox', 
        'goods_list', 
        'normal',
        'high');
}  
add_action('add_meta_boxes', 'goods_meta_box'); 


$goods_meta_fields = array(
    array(  
        'label' => 'Название',  
        'desc'  => 'Название товара',  
        'id'    => 'good_name', 
        'type'  => 'text_name'  
    ),  
    array(  
        'label' => 'Цена',  
        'desc'  => 'Укажите цену товара',  
        'id'    => 'price', 
        'type'  => 'text',  
    ),
    array(  
        'label' => 'Старая цена',  
        'desc'  => 'необязательно указывать',  
        'id'    => 'old_price',  
        'type'  => 'text'  
    ),
      array(  
        'label' => 'Изображение',  
        'desc'  => 'Фото или рисунок товара',  
        'id'    => 'goods_img',  
        'type'  => 'file',  
    ),
    array(  
        'label' => 'Описание товара',  
        'desc'  => 'текст с общим описанием товара',  
        'id'    => 'goods_description', 
        'type'  => 'textarea',  
    ),
    array(  
        'label' => 'Характеристики',  
        'desc'  => 'технические характеристики о товаре и его параметры',  
        'id'    => 'tech_description',  
        'type'  => 'textarea',  
    ),
    
);

function goods_img_upload_script() {
	wp_enqueue_script('jquery');
	if ( ! did_action( 'wp_enqueue_media' ) ) {
		wp_enqueue_media();
	}
 	wp_enqueue_script( 'myuploadscript', get_stylesheet_directory_uri() . '/js/upload.js', array('jquery'), null, false );
}
 
add_action( 'admin_enqueue_scripts', 'goods_img_upload_script' );

function goods_img_upload_field( $name, $value = '', $w = 120, $h = 110) {
	$default = get_stylesheet_directory_uri() . '/img/no-image.jpg';
	if( $value ) {
		$image_attributes = wp_get_attachment_image_src( $value, array($w, $h) );
		$src = $image_attributes[0];
	} else {
		$src = $default;
	}
	echo '
	<div>
		<img data-src="' . $default . '" src="' . $src . '" width="' . $w . 'px" height="' . $h . 'px" />
		<div>
			<input type="hidden" name="' . $name . '" id="' . $name . '" value="' . $value . '" />
			<button type="submit" class="upload_image_button button">Загрузить</button>
			<button type="submit" class="remove_image_button button">&times;</button>
		</div>
	</div>
	';
}
function goods_print_box($post) {
	if( function_exists( 'goods_img_upload_field' ) ) {
		goods_img_upload_field( 'uploader_custom', get_post_meta($post->ID, 'uploader_custom',true) );
	}
}


function show_my_goods_metabox() {  
global $goods_meta_fields; 
global $post;  
echo '<input type="hidden" name="custom_meta_box_nonce" value="'.wp_create_nonce(basename(__FILE__)).'" />';  
    echo '<table class="form-table">';  
    foreach ($goods_meta_fields as $field) {  
        $meta = get_post_meta($post->ID, $field['id'], true);  
        echo '<tr>
                <th><label for="'.$field['id'].'">'.$field['label'].'</label></th>
                <td>';  
                switch($field['type']) {  
                    case 'text_name':  
					    echo '<input type="text" name="'.$field['id'].'" id="'.$field['id'].'" value="'.$meta.'" size="90" />
                        <br /><span class="description">'.$field['desc'].'</span>';  
					break;
					case 'text':  
					    echo '<input type="text" name="'.$field['id'].'" id="'.$field['id'].'" value="'.$meta.'" size="30" />
                        <br /><span class="description">'.$field['desc'].'</span>';  
					break;
                        
                    case 'file':  
                        goods_print_box($post);
					break;
                    case 'textarea':  
					    echo '<textarea name="'.$field['id'].'" id="'.$field['id'].'" value="'.$meta.'"  cols="120" rows="7">'.$meta.'</textarea>
                        <br /><span class="description">'.$field['desc'].'</span>';  
					break;
                }
        echo '</td></tr>';  
    }  
    echo '</table>';
}


function save_my_goods_meta_fields($post_id) {  
    global $goods_meta_fields;  
    if (!wp_verify_nonce($_POST['custom_meta_box_nonce'], basename(__FILE__)))  
        return $post_id;  
    if ( defined('DOING_AUTOSAVE') && DOING_AUTOSAVE ) 
		return $post_id;
    if ('goods_list' == $_POST['post_type']) {  
        if (!current_user_can('edit_page', $post_id))  
            return $post_id;  
        } elseif (!current_user_can('edit_post', $post_id)) {  
            return $post_id;  
    }  
        foreach ($goods_meta_fields as $field) {  
        $old = get_post_meta($post_id, $field['id'], true);  
        $new = $_POST[$field['id']];  
        if ($new && $new != $old) { 
            update_post_meta($post_id, $field['id'], $new);  
        } elseif ('' == $new && $old) {  
            delete_post_meta($post_id, $field['id'], $old); 
        }  
    } 
} 
function goods_save_img_data( $post_id ) {
	if ( defined('DOING_AUTOSAVE') && DOING_AUTOSAVE ) 
		return $post_id;
	update_post_meta( $post_id, 'uploader_custom', $_POST['uploader_custom']);
	return $post_id;
}
add_action('save_post', 'save_my_goods_meta_fields'); 
add_action('save_post', 'goods_save_img_data'); 
/**
 * Set the content width in pixels, based on the theme's design and stylesheet.
 *
 * Priority 0 to make it available to lower priority callbacks.
 *
 * @global int $content_width
 */
function empo_tools_content_width() {
	$GLOBALS['content_width'] = apply_filters( 'empo_tools_content_width', 640 );
}
add_action( 'after_setup_theme', 'empo_tools_content_width', 0 );

/**
 * Register widget area.
 *
 * @link https://developer.wordpress.org/themes/functionality/sidebars/#registering-a-sidebar
 */
function empo_tools_widgets_init() {
	register_sidebar( array(
		'name'          => esc_html__( 'Sidebar', 'empo-tools' ),
		'id'            => 'sidebar-1',
		'description'   => esc_html__( 'Add widgets here.', 'empo-tools' ),
		'before_widget' => '<section id="%1$s" class="widget %2$s">',
		'after_widget'  => '</section>',
		'before_title'  => '<h2 class="widget-title">',
		'after_title'   => '</h2>',
	) );
}
add_action( 'widgets_init', 'empo_tools_widgets_init' );

/**
 * Enqueue scripts and styles.
 */
function empo_tools_scripts() {
	wp_enqueue_style( 'empo-tools-style', get_stylesheet_uri() );
    wp_enqueue_style( 'reset', get_template_directory_uri() . '/css/reset.css' );

	wp_enqueue_script( 'empo-tools-navigation', get_template_directory_uri() . '/js/navigation.js', array(), '20151215', true );

	wp_enqueue_script( 'empo-tools-skip-link-focus-fix', get_template_directory_uri() . '/js/skip-link-focus-fix.js', array(), '20151215', true );
    
    wp_enqueue_script( 'animation-plugin', get_template_directory_uri() . '/js/velocity.js', array(), '', true );
    
    wp_enqueue_script( 'main_script', get_template_directory_uri() . '/js/script.js', array(), '1.0.0', true );

	if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) {
		wp_enqueue_script( 'comment-reply' );
	}
}
register_nav_menus(array(
	'right-top'    => 'Меню входа/регистрации',    
    'left-top' => 'Главное меню',
    'sub-top'    => 'Информ-меню',    
    'left-bottom' => 'Меню помощи',
    'between-bottom'    => 'Сервис-меню',    
    'right-bottom' => 'Меню правил',
));

add_theme_support( 'post-formats', array('aside', 'gallery', 'link', 'image', 'quote', 'status', 'video', 'chat', 'audio', 'goods') );

add_post_type_support( 'page', 'post-formats' );

add_action( 'wp_enqueue_scripts', 'empo_tools_scripts' );

// -------  RSS  -------//


function my_categories_for_feed( $query ){  
	if( ! $query->is_feed || ! $query->is_main_query() )
		return;

	$query->set( 'cat', '1' ); 
}
add_filter( 'pre_get_posts', 'my_categories_for_feed' );


/**
 * Implement the Custom Header feature.
 */
require get_template_directory() . '/inc/custom-header.php';

/**
 * Custom template tags for this theme.
 */
require get_template_directory() . '/inc/template-tags.php';

/**
 * Custom functions that act independently of the theme templates.
 */
require get_template_directory() . '/inc/extras.php';

/**
 * Customizer additions.
 */
require get_template_directory() . '/inc/customizer.php';

/**
 * Load Jetpack compatibility file.
 */
require get_template_directory() . '/inc/jetpack.php';

// ------ post/video views count--------//


function getPostViews($postID){
    $count_key = 'post_views_count';
    $count = get_post_meta($postID, $count_key, true);
    if($count==''){
        delete_post_meta($postID, $count_key);
        add_post_meta($postID, $count_key, '0');
        return "0 просмотров";
    }
    return "Просмотрено " . $count;
}
function setPostViews() {
    $count_key = 'post_views_count';
    $postID = $_GET['id'];
    $count = get_post_meta($postID, $count_key, true);
    $count++;
      update_post_meta($postID, $count_key, $count);
//    if($count==''){
//        $count = 0;
//        delete_post_meta($postID, $count_key);
//        add_post_meta($postID, $count_key, '0');
//    }else{
//        $count++;
//        update_post_meta($postID, $count_key, $count);
//    }
}


add_action('wp_ajax_setPostViews', 'setPostViews');
add_action('wp_ajax_nopriv_setPostViews', 'setPostViews');


