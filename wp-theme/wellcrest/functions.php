<?php
/**
 * WellCrest Health theme functions and definitions.
 *
 * @package WellCrest
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

define( 'WELLCREST_VERSION', '1.0.0' );
define( 'WELLCREST_DIR', get_template_directory() );
define( 'WELLCREST_URI', get_template_directory_uri() );

require_once WELLCREST_DIR . '/inc/class-wellcrest-mobile-walker.php';
require_once WELLCREST_DIR . '/inc/icons.php';

/**
 * Calendly URLs (matching the React site).
 */
define( 'WELLCREST_CALENDLY_INITIAL', 'https://calendly.com/wellcresttherapy-info/initial-consultation' );
define( 'WELLCREST_CALENDLY_FOLLOWUP', 'https://calendly.com/wellcresttherapy-info/follow-up-visit' );

if ( ! function_exists( 'wellcrest_setup' ) ) :
	/**
	 * Sets up theme defaults and registers support for various WordPress features.
	 */
	function wellcrest_setup() {
		load_theme_textdomain( 'wellcrest', WELLCREST_DIR . '/languages' );

		add_theme_support( 'automatic-feed-links' );
		add_theme_support( 'title-tag' );
		add_theme_support( 'post-thumbnails' );
		add_theme_support(
			'html5',
			array(
				'search-form',
				'comment-form',
				'comment-list',
				'gallery',
				'caption',
				'style',
				'script',
			)
		);
		add_theme_support(
			'custom-logo',
			array(
				'height'      => 96,
				'width'       => 320,
				'flex-height' => true,
				'flex-width'  => true,
			)
		);
		add_theme_support( 'customize-selective-refresh-widgets' );

		// Register navigation menus.
		register_nav_menus(
			array(
				'primary'     => __( 'Primary Menu', 'wellcrest' ),
				'footer'      => __( 'Footer Menu', 'wellcrest' ),
				'footer_regions' => __( 'Footer Regions', 'wellcrest' ),
				'footer_company' => __( 'Footer Company', 'wellcrest' ),
			)
		);

		// Default featured image size for article cards.
		add_image_size( 'wellcrest-card', 640, 400, true );
	}
endif;
add_action( 'after_setup_theme', 'wellcrest_setup' );

/**
 * Set the content width in pixels.
 */
function wellcrest_content_width() {
	$GLOBALS['content_width'] = apply_filters( 'wellcrest_content_width', 1200 );
}
add_action( 'after_setup_theme', 'wellcrest_content_width', 0 );

/**
 * Register widget area.
 */
function wellcrest_widgets_init() {
	register_sidebar(
		array(
			'name'          => __( 'Footer', 'wellcrest' ),
			'id'            => 'footer-1',
			'description'   => __( 'Widgets in this area will be shown in the footer.', 'wellcrest' ),
			'before_widget' => '<div id="%1$s" class="widget %2$s">',
			'after_widget'  => '</div>',
			'before_title'  => '<h4 class="widget-title">',
			'after_title'   => '</h4>',
		)
	);
}
add_action( 'widgets_init', 'wellcrest_widgets_init' );

/**
 * Enqueue scripts and styles.
 */
function wellcrest_scripts() {
	// Google Fonts - Inter (matching the React site).
	wp_enqueue_style(
		'wellcrest-fonts',
		'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap',
		array(),
		null
	);

	// Main stylesheet.
	wp_enqueue_style(
		'wellcrest-style',
		WELLCREST_URI . '/assets/css/main.css',
		array( 'wellcrest-fonts' ),
		WELLCREST_VERSION
	);

	wp_style_add_data( 'wellcrest-style', 'rtl', 'replace' );

	// Main scripts.
	wp_enqueue_script(
		'wellcrest-scripts',
		WELLCREST_URI . '/assets/js/main.js',
		array(),
		WELLCREST_VERSION,
		true
	);

	// Pass data to JS.
	wp_localize_script(
		'wellcrest-scripts',
		'wellcrestData',
		array(
			'calendly' => array(
				'initial' => WELLCREST_CALENDLY_INITIAL,
				'followup' => WELLCREST_CALENDLY_FOLLOWUP,
			),
			'ajaxUrl'  => admin_url( 'admin-ajax.php' ),
		)
	);

	if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) {
		wp_enqueue_script( 'comment-reply' );
	}
}
add_action( 'wp_enqueue_scripts', 'wellcrest_scripts' );

/**
 * Body classes - add 'admin-bar' handling not needed here, handled by WP core.
 */
function wellcrest_body_classes( $classes ) {
	if ( is_front_page() ) {
		$classes[] = 'front-page';
	}
	return $classes;
}
add_filter( 'body_class', 'wellcrest_body_classes' );

/**
 * Add custom classes to nav menu items based on dropdown support.
 * We rely on the .children class from WordPress for dropdowns.
 */

/**
 * Custom excerpt length for article cards.
 */
function wellcrest_excerpt_length( $length ) {
	return 24;
}
add_filter( 'excerpt_length', 'wellcrest_excerpt_length' );

/**
 * Estimate read time (defaulting to 3 minutes).
 *
 * @return string
 */
function wellcrest_read_time() {
	$content = get_the_content();
	$words   = str_word_count( wp_strip_all_tags( $content ) );
	$minutes = max( 1, (int) ceil( $words / 200 ) );
	/* translators: %d: number of minutes. */
	return sprintf( _n( '%d min read', '%d min read', $minutes, 'wellcrest' ), $minutes );
}

/**
 * Replace excerpt ellipsis.
 */
function wellcrest_excerpt_more( $more ) {
	return '&hellip;';
}
add_filter( 'excerpt_more', 'wellcrest_excerpt_more' );

/**
 * Register Customizer settings used to customize the home page and contact details.
 *
 * @param WP_Customize_Manager $wp_customize Theme Customizer object.
 */
function wellcrest_customize_register( $wp_customize ) {

	// --- Contact details ---
	$wp_customize->add_section(
		'wellcrest_contact',
		array(
			'title'       => __( 'WellCrest Contact Info', 'wellcrest' ),
			'priority'    => 30,
			'description' => __( 'Update the practice contact details shown across the site.', 'wellcrest' ),
		)
	);

	$fields = array(
		'phone'        => array( 'default' => '470-481-2034', 'label' => __( 'Phone Number', 'wellcrest' ) ),
		'phone_href'   => array( 'default' => 'tel:4704812034', 'label' => __( 'Phone Link (tel:)', 'wellcrest' ) ),
		'fax'          => array( 'default' => '470-481-2577', 'label' => __( 'Fax Number', 'wellcrest' ) ),
		'email'        => array( 'default' => 'info@wellcresttherapy.com', 'label' => __( 'Email Address', 'wellcrest' ) ),
		'address'      => array( 'default' => '7910 Mall Ring Road, Stonecrest, GA', 'label' => __( 'Address Line', 'wellcrest' ) ),
		'address_l2'   => array( 'default' => 'Stonecrest, GA 30038', 'label' => __( 'Address Line 2', 'wellcrest' ) ),
		'linkedin'     => array( 'default' => 'https://linkedin.com/company/wellcrest-health', 'label' => __( 'LinkedIn URL', 'wellcrest' ) ),
		'facebook'     => array( 'default' => 'https://web.facebook.com/profile.php?id=61577744694621', 'label' => __( 'Facebook URL', 'wellcrest' ) ),
		'instagram'    => array( 'default' => 'https://instagram.com/wellcresttherapy', 'label' => __( 'Instagram URL', 'wellcrest' ) ),
	);

	foreach ( $fields as $key => $field ) {
		$wp_customize->add_setting(
			"wellcrest_{$key}",
			array(
				'default'           => $field['default'],
				'sanitize_callback' => 'sanitize_text_field',
			)
		);
		$wp_customize->add_control(
			"wellcrest_{$key}",
			array(
				'label'   => $field['label'],
				'section' => 'wellcrest_contact',
				'type'    => 'text',
			)
		);
	}

	// --- Hero section ---
	$wp_customize->add_section(
		'wellcrest_home',
		array(
			'title'    => __( 'WellCrest Home Page', 'wellcrest' ),
			'priority' => 31,
		)
	);
	$home = array(
		'hero_badge'      => array( 'default' => 'YOUR HEALTH, OUR PRIORITY', 'label' => __( 'Hero Badge', 'wellcrest' ) ),
		'hero_title'      => array( 'default' => 'Mental &amp; Sexual Health.', 'label' => __( 'Hero Title', 'wellcrest' ) ),
		'hero_subtitle'   => array( 'default' => 'WellCrest Mental &amp; Sexual Health delivers compassionate, evidence-based care across mental health, sexual health, and wellness. In-person in Georgia. Telehealth across Georgia, Arizona, and Maryland.', 'label' => __( 'Hero Subtitle', 'wellcrest' ) ),
		'hero_cta_primary' => array( 'default' => 'Book Appointment', 'label' => __( 'Hero Primary CTA', 'wellcrest' ) ),
		'hero_cta_secondary' => array( 'default' => 'About Us', 'label' => __( 'Hero Secondary CTA', 'wellcrest' ) ),
	);
	foreach ( $home as $key => $field ) {
		$wp_customize->add_setting(
			"wellcrest_{$key}",
			array(
				'default'           => $field['default'],
				'sanitize_callback' => 'sanitize_text_field',
			)
		);
		$wp_customize->add_control(
			"wellcrest_{$key}",
			array(
				'label'   => $field['label'],
				'section' => 'wellcrest_home',
				'type'    => 'text',
			)
		);
	}

	// --- Footer ---
	$wp_customize->add_section(
		'wellcrest_footer',
		array(
			'title'    => __( 'WellCrest Footer', 'wellcrest' ),
			'priority' => 32,
		)
	);
	$wp_customize->add_setting(
		'wellcrest_footer_description',
		array(
			'default'           => 'Compassionate, convenient, and affordable mental and sexual health services. We deliver evidence-based care across Georgia, Arizona, and Maryland.',
			'sanitize_callback' => 'sanitize_textarea_field',
		)
	);
	$wp_customize->add_control(
		'wellcrest_footer_description',
		array(
			'label'   => __( 'Footer Description', 'wellcrest' ),
			'section' => 'wellcrest_footer',
			'type'    => 'textarea',
		)
	);
	$wp_customize->add_setting(
		'wellcrest_copyright',
		array(
			'default'           => '© 2025 WellCrest Health. All rights reserved.',
			'sanitize_callback' => 'sanitize_text_field',
		)
	);
	$wp_customize->add_control(
		'wellcrest_copyright',
		array(
			'label'   => __( 'Copyright Text', 'wellcrest' ),
			'section' => 'wellcrest_footer',
			'type'    => 'text',
		)
	);
}
add_action( 'customize_register', 'wellcrest_customize_register' );

/**
 * Contact helper - returns an option value or default.
 *
 * @param string $key Option key suffix.
 * @param string $default Fallback value.
 * @return string
 */
function wellcrest_opt( $key, $default = '' ) {
	return get_theme_mod( "wellcrest_{$key}", $default );
}

/**
 * Services list used across the site (matching the original data).
 */
function wellcrest_services() {
	return array(
		array(
			'id'    => 'mental-health',
			'title' => 'Mental Health Services',
			'short' => 'Personalized therapy & psychiatric care',
			'icon'  => 'brain',
			'href'  => '/services/mental-health',
		),
		array(
			'id'    => 'telehealth',
			'title' => 'Telehealth',
			'short' => 'Virtual visits in GA, AZ, MD',
			'icon'  => 'video',
			'href'  => '/services',
		),
		array(
			'id'    => 'sexual-health',
			'title' => 'Sexual Health Services',
			'short' => 'Assessment, therapy & education',
			'icon'  => 'heart',
			'href'  => '/sexual-health/assessment',
			'new'   => true,
		),
	);
}

/**
 * Locations data.
 */
function wellcrest_locations() {
	return array(
		'georgia' => array(
			'name'       => 'Georgia',
			'badge'      => 'Main Office',
			'tagline'    => 'In-Person & Telehealth',
			'status'     => 'Dual',
			'available'  => true,
			'desc'       => 'Our Georgia location offers both in-person and telehealth services in the Atlanta metro area.',
			'services'   => array( 'In-Person Visits', 'Telehealth', 'Psychiatric Care', 'Comprehensive Mental Wellness', 'Holistic Therapy Support' ),
		),
		'arizona' => array(
			'name'       => 'Arizona',
			'badge'      => 'Telehealth',
			'tagline'    => 'Telehealth Only',
			'status'     => 'Telehealth',
			'available'  => true,
			'desc'       => 'Access quality mental health care from anywhere in Arizona through our secure telehealth platform.',
			'services'   => array( 'Telehealth', 'Psychiatric Care', 'Holistic Therapy Support', 'Therapy' ),
		),
		'maryland' => array(
			'name'       => 'Maryland',
			'badge'      => 'Telehealth',
			'tagline'    => 'Telehealth Only',
			'status'     => 'Telehealth',
			'available'  => true,
			'desc'       => 'Access quality mental health care from anywhere in Maryland through our secure telehealth platform.',
			'services'   => array( 'Telehealth', 'Psychiatric Care', 'Holistic Therapy Support', 'Therapy' ),
		),
	);
}

/**
 * Hero stats (matching the React site).
 */
function wellcrest_hero_stats() {
	return array(
		array( 'icon' => 'star',   'value' => '4.9',  'label' => 'Rating' ),
		array( 'icon' => 'shield', 'value' => 'HIPAA', 'label' => 'Compliant' ),
		array( 'icon' => 'users',  'value' => '10+',   'label' => 'Years Exp' ),
		array( 'icon' => 'video',  'value' => 'In-Office', 'label' => '& Telehealth' ),
	);
}

/**
 * Why choose us features.
 */
function wellcrest_why_features() {
	return array(
		array( 'icon' => 'clinical',    'title' => 'Clinical Excellence',   'desc' => 'Evidence-based approaches backed by latest research and best practices.' ),
		array( 'icon' => 'integrated',  'title' => 'Coordinated Support',   'desc' => 'Comprehensive mental wellness and coordinated support services.' ),
		array( 'icon' => 'telehealth',  'title' => 'Telehealth Access',     'desc' => 'Secure video consultations available across all served states.' ),
		array( 'icon' => 'certified',   'title' => 'Dual Certification',    'desc' => 'Board-certified providers with broad clinical expertise.' ),
		array( 'icon' => 'secure',      'title' => 'Data Security',         'desc' => 'HIPAA-compliant systems protecting your health information.' ),
		array( 'icon' => 'premium',     'title' => 'Premium Experience',    'desc' => 'Modern, technology-forward wellness experience.' ),
	);
}

/**
 * Why choose us stats.
 */
function wellcrest_why_stats() {
	return array(
		array( 'icon' => 'clock',    'value' => '20+', 'label' => 'Years' ),
		array( 'icon' => 'users',    'value' => '15K+', 'label' => 'Patients' ),
		array( 'icon' => 'award',    'value' => '99%', 'label' => 'Satisfaction' ),
		array( 'icon' => 'smartphone', 'value' => '24/7', 'label' => 'Support' ),
	);
}

/**
 * Sexual health detail page content keyed by slug.
 *
 * @return array
 */
function wellcrest_sexual_health_pages() {
	return array(
		'assessment' => array(
			'title'     => 'Sexual Assessment & Diagnosis',
			'subtitle'  => 'Thorough, compassionate evaluation of sexual concerns',
			'icon'      => 'stethoscope',
			'about_h'   => 'About Our Assessment',
			'about'     => array(
				'Our sexual assessment provides a thorough clinical evaluation of your sexual concerns, looking beyond the surface to understand the biological, psychological, relational, and cultural factors at play. We take the time to listen and get a complete picture of your experiences.',
				'As part of the evaluation, we work to differentiate sexual dysfunction from medical, medication-related, or psychiatric causes, so that you receive an accurate diagnosis and a treatment plan that targets the real root of the issue.',
			),
			'eval_title' => 'What We Evaluate',
			'eval'       => array(
				'Clinical evaluation of sexual concerns (biological, psychological, relational, and cultural factors)',
				'Differentiating sexual dysfunction from medical, medication-related, or psychiatric causes',
			),
			'approach_title' => 'Our Approach',
			'approach'   => array(
				array( 'icon' => 'search', 'title' => 'Comprehensive Evaluation', 'desc' => 'We explore all contributing factors — biological, psychological, relational, and cultural' ),
				array( 'icon' => 'file',   'title' => 'Accurate Diagnosis', 'desc' => 'We distinguish sexual concerns from medical, medication-related, or psychiatric causes' ),
				array( 'icon' => 'shield', 'title' => 'Confidential & Comfortable', 'desc' => 'A safe, judgment-free space to share your concerns openly' ),
			),
			'info'       => array(
				array( 'icon' => 'stethoscope', 'title' => 'Clinical Evaluation', 'desc' => 'Biological, psychological & relational factors' ),
				array( 'icon' => 'shield', 'title' => 'Accurate Diagnosis', 'desc' => 'Root-cause focused' ),
			),
			'cta_h'      => "Get the Answers You've Been Looking For",
			'cta_text'   => 'Begin with a thorough assessment and take the first step toward a clearer understanding of your sexual health.',
			'cta_btn'    => 'Book Your Assessment',
		),
		'individual-therapy' => array(
			'title'     => 'Individual Therapy',
			'subtitle'  => 'Support for the sexual concerns that affect your life',
			'icon'      => 'heart',
			'about_h'   => 'About Individual Therapy',
			'about'     => array(
				'Sexual concerns are deeply personal, and they often carry anxiety, shame, or uncertainty. Our individual therapy provides a safe, confidential space to explore these concerns with a licensed professional who treats you with respect and without judgment. Whether the issue is tied to stress, relationships, mental health, or your overall well-being, we meet you where you are and work with you toward meaningful change.',
			),
			'eval_title' => 'Concerns We Help With',
			'eval'       => array(
				'Sexual concerns associated with depression, anxiety, or relationship difficulties',
				'Changes in sexual functioning related to stress, medications, aging, or mental-health conditions',
				'Erectile dysfunction, premature or delayed ejaculation',
				'Orgasmic difficulties (anorgasmia, delayed orgasm)',
				'Painful intercourse (dyspareunia, vaginismus)',
				'Sexual anxiety, performance anxiety, or avoidance',
				'Sexual concerns related to chronic illness, disability, menopause, or aging',
				'Low or mismatched desire/libido concerns',
				'Recovery and adjustment after sexual trauma or abuse (in coordination with trauma-focused therapist)',
				'Sexual dissatisfaction or intimacy problems',
				'Anxiety, shame, or trauma related to sexuality',
				'Compulsive sexual behavior or out-of-control sexual behavior patterns',
				'Sexual identity, orientation, and gender exploration',
			),
			'approach_title' => 'Our Approach',
			'approach'   => array(
				array( 'icon' => 'message', 'title' => 'Individualized Care', 'desc' => 'Therapy tailored to your unique concerns and goals' ),
				array( 'icon' => 'brain', 'title' => 'Evidence-Based Modalities', 'desc' => 'CBT and other proven approaches for sexual concerns' ),
				array( 'icon' => 'shield', 'title' => 'Confidential & Safe', 'desc' => 'A judgment-free space built on trust and discretion' ),
			),
			'info'       => array(
				array( 'icon' => 'heart', 'title' => 'Individual Sessions', 'desc' => 'One-on-one confidential care' ),
				array( 'icon' => 'shield', 'title' => 'Judgment-Free', 'desc' => 'A safe space for every concern' ),
			),
			'cta_h'      => "You Don't Have to Navigate This Alone",
			'cta_text'   => 'Start individual therapy and get compassionate, professional support for your sexual health.',
			'cta_btn'    => 'Start Therapy',
		),
		'education' => array(
			'title'     => 'Education & Psychoeducation',
			'subtitle'  => 'Knowledge that normalizes, empowers, and heals',
			'icon'      => 'book',
			'about_h'   => 'About Our Education',
			'about'     => array(
				'Many sexual concerns are rooted in misunderstanding, myth, or a lack of information about how our bodies actually work. Our education and psychoeducation services help you build an accurate, compassionate understanding of sexual health — so you can feel more confident, communicate more openly, and make informed decisions about your care.',
				'We focus on normalizing the wide range of human sexual experience and empowering you with practical knowledge and skills you can use every day.',
			),
			'eval_title' => 'Topics We Cover',
			'eval'       => array(
				'Anatomy, the sexual response cycle, and normal variation',
				'Consent, communication skills, and boundary-setting',
				'Referrals for pelvic floor physical therapy, medical workup, or hormone evaluation when indicated',
			),
			'approach_title' => 'How We Help',
			'approach'   => array(
				array( 'icon' => 'book', 'title' => 'Accurate Information', 'desc' => 'Clear, evidence-based education about anatomy, response cycles, and normal variation' ),
				array( 'icon' => 'message', 'title' => 'Better Communication', 'desc' => 'Practical tools for consent, boundary-setting, and talking about sex with your partner' ),
				array( 'icon' => 'compass', 'title' => 'The Right Referrals', 'desc' => 'Guidance to pelvic floor physical therapy, medical workup, or hormone evaluation when indicated' ),
			),
			'info'       => array(
				array( 'icon' => 'book', 'title' => 'Empowering Knowledge', 'desc' => 'Normalize, inform, and build confidence' ),
				array( 'icon' => 'stethoscope', 'title' => 'Specialist Referrals', 'desc' => 'PT, medical workup & hormone evaluation' ),
			),
			'cta_h'      => 'Understanding Is the First Step to Healing',
			'cta_text'   => 'Gain the knowledge and tools to feel confident and in control of your sexual health.',
			'cta_btn'    => 'Get Started',
		),
		'coordination' => array(
			'title'     => 'Coordination of Care',
			'subtitle'  => 'One team, connected around your sexual health',
			'icon'      => 'users',
			'about_h'   => 'About Care Coordination',
			'about'     => array(
				"Many sexual concerns have overlapping medical and psychological roots. That's why we take a collaborative, whole-person approach. We partner closely with OB-GYNs, urologists, endocrinologists, pelvic floor physical therapists, and prescribers to make sure every side of your health is addressed.",
				'Rather than leaving you to navigate different providers on your own, our team connects the dots — sharing the right information, coordinating treatment plans, and keeping everyone on the same page.',
			),
			'eval_title' => 'Who We Collaborate With',
			'eval'       => array(
				'OB-GYNs — Collaborating on gynecological and reproductive concerns',
				'Urologists — Coordinating care for urological and erectile concerns',
				'Endocrinologists — Working together on hormone-related sexual concerns',
				'Pelvic Floor PTs — Connecting you with specialists for pelvic floor therapy',
				'Prescribers — Coordinating with your medication team for safe care',
			),
			'approach_title' => 'Why It Matters',
			'approach'   => array(
				array( 'icon' => 'check', 'title' => 'Accurate Diagnoses', 'desc' => 'Integrated care for overlapping medical and psychological roots' ),
				array( 'icon' => 'network', 'title' => 'Seamless Coordination', 'desc' => 'Referrals handled for you so you never chase providers alone' ),
				array( 'icon' => 'link', 'title' => 'Whole-Person Care', 'desc' => 'The psychological and physical sides of your care work together' ),
			),
			'info'       => array(
				array( 'icon' => 'users', 'title' => 'Integrated Team', 'desc' => 'Psychological & medical care together' ),
				array( 'icon' => 'network', 'title' => 'Provider Network', 'desc' => 'OB-GYN, urology, endocrinology & more' ),
			),
			'cta_h'      => 'Whole-Person Care, One Team',
			'cta_text'   => 'Let us coordinate your care so every provider works together around your goals.',
			'cta_btn'    => 'Get Connected',
		),
	);
}

/**
 * Handle the contact and preceptorship forms via admin-post / admin-ajax.
 * Simpler approach: forms POST to a hidden custom handler using admin-post.php.
 */
function wellcrest_handle_forms() {
	// no-op placeholder - forms handled client side / contact via email action in templates.
}
add_action( 'init', 'wellcrest_handle_forms' );

/**
 * Handle the contact form submission via admin-post.php.
 */
function wellcrest_handle_contact_form() {
	if ( ! isset( $_POST['wellcrest_contact_nonce'] ) || ! wp_verify_nonce( sanitize_text_field( wp_unslash( $_POST['wellcrest_contact_nonce'] ) ), 'wellcrest_contact' ) ) {
		set_transient( 'wellcrest_contact_notice', __( 'Security check failed.', 'wellcrest' ), 30 );
		wp_safe_redirect( wp_get_referer() ? wp_get_referer() : home_url( '/contact' ) );
		exit;
	}

	$to_email = wellcrest_opt( 'email', 'info@wellcresttherapy.com' );
	$name     = isset( $_POST['name'] ) ? sanitize_text_field( wp_unslash( $_POST['name'] ) ) : '';
	$email    = isset( $_POST['email'] ) ? sanitize_email( wp_unslash( $_POST['email'] ) ) : '';
	$phone    = isset( $_POST['phone'] ) ? sanitize_text_field( wp_unslash( $_POST['phone'] ) ) : '';
	$service  = isset( $_POST['service'] ) ? sanitize_text_field( wp_unslash( $_POST['service'] ) ) : '';
	$message  = isset( $_POST['message'] ) ? sanitize_textarea_field( wp_unslash( $_POST['message'] ) ) : '';

	$subject = sprintf( 'WellCrest Contact - %s', $name );
	$body    = "Name: {$name}\nEmail: {$email}\nPhone: {$phone}\nService: {$service}\n\nMessage:\n{$message}";

	$sent = wp_mail( $to_email, $subject, $body, array( 'Reply-To' => $email ) );

	set_transient( 'wellcrest_contact_notice', $sent ? __( 'Thank you! Your message has been sent.', 'wellcrest' ) : __( 'Sorry, there was a problem sending your message. Please try again.', 'wellcrest' ), 30 );
	wp_safe_redirect( wp_get_referer() ? wp_get_referer() : home_url( '/contact' ) );
	exit;
}
add_action( 'admin_post_nopriv_wellcrest_contact', 'wellcrest_handle_contact_form' );
add_action( 'admin_post_wellcrest_contact', 'wellcrest_handle_contact_form' );

/**
 * Handle the preceptorship form submission via admin-post.php.
 */
function wellcrest_handle_preceptorship_form() {
	if ( ! isset( $_POST['wellcrest_precept_nonce'] ) || ! wp_verify_nonce( sanitize_text_field( wp_unslash( $_POST['wellcrest_precept_nonce'] ) ), 'wellcrest_preceptorship' ) ) {
		wp_safe_redirect( home_url( '/preceptorship' ) );
		exit;
	}

	$to_email = wellcrest_opt( 'email', 'info@wellcresttherapy.com' );
	$first    = isset( $_POST['firstName'] ) ? sanitize_text_field( wp_unslash( $_POST['firstName'] ) ) : '';
	$last     = isset( $_POST['lastName'] ) ? sanitize_text_field( wp_unslash( $_POST['lastName'] ) ) : '';
	$email    = isset( $_POST['email'] ) ? sanitize_email( wp_unslash( $_POST['email'] ) ) : '';

	// Collect all fields for a formatted email body.
	$fields = array(
		'first'  => 'First Name',
		'last'   => 'Last Name',
		'email'  => 'Email Address',
		'phone'  => 'Phone Number',
		'dob'    => 'Date of Birth',
		'address'=> 'Street Address',
		'city'   => 'City',
		'state'  => 'State',
		'zip'    => 'ZIP Code',
		'school' => 'School / Institution',
		'program'=> 'Degree / Program',
		'currentYear' => 'Current Year / Level',
		'hours'  => 'Clinical Hours Needed',
		'preferredStartDate' => 'Preferred Start Date',
		'preferredSchedule'  => 'Preferred Schedule',
		'cprCertified'       => 'CPR / BLS Certified',
		'immunizationsUpToDate' => 'Immunizations Up to Date',
		'backgroundCheckCompleted' => 'Background Check Completed',
		'liabilityInsurance'  => 'Liability / Malpractice Insurance',
		'emergencyName'       => 'Emergency Contact Name',
		'emergencyPhone'      => 'Emergency Contact Phone',
		'emergencyRelationship' => 'Emergency Contact Relationship',
		'notes'   => 'Additional Notes',
	);

	$body_lines = array();
	foreach ( $fields as $key => $label ) {
		$value = isset( $_POST[ $key ] ) ? sanitize_text_field( wp_unslash( $_POST[ $key ] ) ) : '';
		if ( '' !== $value ) {
			$body_lines[] = sprintf( '%s: %s', $label, $value );
		}
	}
	$body = implode( "\n", $body_lines );

	$subject = sprintf( 'Preceptorship Application - %s %s', $first, $last );
	wp_mail( $to_email, $subject, $body, array( 'Reply-To' => $email ) );

	wp_safe_redirect( home_url( '/preceptorship?wellcrest_precept=success' ) );
	exit;
}
add_action( 'admin_post_nopriv_wellcrest_preceptorship', 'wellcrest_handle_preceptorship_form' );
add_action( 'admin_post_wellcrest_preceptorship', 'wellcrest_handle_preceptorship_form' );

/**
 * Location detail data keyed by slug.
 *
 * @return array
 */
function wellcrest_location_details() {
	return array(
		'georgia' => array(
			'name'       => 'Georgia',
			'fullName'   => 'WellCrest Health — Georgia',
			'tagline'    => 'In-Person & Telehealth',
			'address'    => '7910 Mall Ring Road Suite 200, Stonecrest, GA 30038',
			'suite'      => 'Suite 200 — Second Floor',
			'phone'      => '470-481-2034',
			'fax'        => '470-481-2577',
			'email'      => 'info@wellcresttherapy.com',
			'services'   => array( 'Psychiatric Evaluations', 'Holistic Therapy Support', 'ADHD', 'Depression', 'Bipolar Disorder', 'Anxiety', 'Telehealth' ),
			'features'   => array( 'Full In-Person Services', 'Telehealth Available', 'Free Parking', 'Wheelchair Accessible', 'Private Waiting Areas' ),
			'description'=> 'Our Georgia location offers both in-person and telehealth services in the Atlanta metro area. Located in Stonecrest, we serve patients from 16-80 yrs old with comprehensive mental health and wellness services.',
			'mapUrl'     => 'https://maps.google.com/?q=7910+Mall+Ring+Road+Suite+200+Stonecrest+GA+30038',
			'license'    => 'Licensed to practice in Georgia',
		),
		'arizona' => array(
			'name'       => 'Arizona',
			'fullName'   => 'WellCrest Health — Arizona',
			'tagline'    => 'Telehealth Only',
			'address'    => 'Telehealth — Serving All of Arizona',
			'suite'      => '',
			'phone'      => '470-481-2034',
			'fax'        => '470-481-2577',
			'email'      => 'info@wellcresttherapy.com',
			'services'   => array( 'Psychiatric Evaluations', 'Holistic Therapy Support', 'Cognitive Behavioral Therapy', 'Anxiety & Depression Treatment', 'Stress Management', 'Follow-up Visits', 'Telehealth' ),
			'features'   => array( 'Secure Video Visits', 'HIPAA Compliant Platform', 'Flexible Scheduling', 'No Travel Required', 'Digital Intake Forms', 'Wellness Support Available' ),
			'description'=> 'Our Arizona services are delivered exclusively through telehealth, providing convenient access to quality mental health care from anywhere in the state. Meet with our providers from the comfort of your home.',
			'mapUrl'     => null,
			'license'    => 'Licensed to practice in Arizona',
		),
		'maryland' => array(
			'name'       => 'Maryland',
			'fullName'   => 'WellCrest Health — Maryland',
			'tagline'    => 'Telehealth Only',
			'address'    => 'Telehealth — Serving All of Maryland',
			'suite'      => '',
			'phone'      => '470-481-2034',
			'fax'        => '470-481-2577',
			'email'      => 'info@wellcresttherapy.com',
			'services'   => array( 'Psychiatric Evaluations', 'Holistic Therapy Support', 'ADHD Assessment & Treatment', 'Mood Disorder Management', 'Follow-up Visits', 'Telehealth' ),
			'features'   => array( 'Secure Video Visits', 'HIPAA Compliant Platform', 'Flexible Scheduling', 'No Travel Required', 'Digital Intake Forms', 'Wellness Support Available' ),
			'description'=> 'Our Maryland services are delivered exclusively through telehealth, providing convenient access to quality mental health care from anywhere in the state. Meet with our providers from the comfort of your home.',
			'mapUrl'     => null,
			'license'    => 'Licensed to practice in Maryland',
		),
	);
}
