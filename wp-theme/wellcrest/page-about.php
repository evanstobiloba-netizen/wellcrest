<?php
/**
 * Template for about page (page-about.php).
 *
 * @package WellCrest
 */

get_header();

get_template_part(
	'template-parts/page-hero',
	null,
	array(
		'title'    => get_the_title() ? get_the_title() : esc_html__( 'Compassionate Care for Your Mental & Sexual Health', 'wellcrest' ),
		'badge'    => esc_html__( 'About Us', 'wellcrest' ),
		'subtitle' => esc_html__( 'WellCrest Mental & Sexual Health is a leading mental and sexual health practice dedicated to providing compassionate, convenient, and affordable mental and sexual health services to patients across Georgia, Arizona and Maryland.', 'wellcrest' ),
	)
);
?>

<main class="site-main">

	<!-- Mission -->
	<section class="section-gray py-16">
		<div class="container">
			<div class="doctor-grid">
				<div>
					<h2 class="doctor-name" style="font-size:1.875rem;"><?php esc_html_e( 'Our Mission', 'wellcrest' ); ?></h2>
					<p class="doctor-bio" style="margin-top:1rem;"><?php esc_html_e( 'WellCrest Mental & Sexual Health is committed to helping individuals achieve optimal health and well-being through compassionate, patient-centered care that integrates mental health, sexual health, and wellness services. We provide evidence-based approaches across the lifespan, recognizing the connection between physical and emotional health. We believe everyone deserves access to high-quality, comprehensive care in a supportive, respectful, and understanding environment.', 'wellcrest' ); ?></p>
				</div>
				<div class="features-grid" style="grid-template-columns:1fr 1fr;gap:1rem;">
					<div class="feature-card">
						<div class="feature-icon"><?php wellcrest_icon_e( 'brain' ); ?></div>
						<h3><?php esc_html_e( 'Expert Care', 'wellcrest' ); ?></h3>
						<p><?php esc_html_e( 'Licensed professionals with years of experience', 'wellcrest' ); ?></p>
					</div>
					<div class="feature-card">
						<div class="feature-icon"><?php wellcrest_icon_e( 'heart' ); ?></div>
						<h3><?php esc_html_e( 'Compassionate', 'wellcrest' ); ?></h3>
						<p><?php esc_html_e( 'We listen and understand your journey', 'wellcrest' ); ?></p>
					</div>
					<div class="feature-card">
						<div class="feature-icon"><?php wellcrest_icon_e( 'video' ); ?></div>
						<h3><?php esc_html_e( 'Telehealth', 'wellcrest' ); ?></h3>
						<p><?php esc_html_e( 'Care from the comfort of your home', 'wellcrest' ); ?></p>
					</div>
					<div class="feature-card">
						<div class="feature-icon"><?php wellcrest_icon_e( 'shield' ); ?></div>
						<h3><?php esc_html_e( 'Confidential', 'wellcrest' ); ?></h3>
						<p><?php esc_html_e( 'Your privacy is always protected', 'wellcrest' ); ?></p>
					</div>
				</div>
			</div>
		</div>
	</section>

	<?php get_template_part( 'template-parts/section-doctor' ); ?>

	<!-- Why Choose Us -->
	<section class="section">
		<div class="container">
			<div class="section-header">
				<h2><?php esc_html_e( 'Why Choose WellCrest Health', 'wellcrest' ); ?></h2>
				<p class="section-subtitle"><?php esc_html_e( "Choosing the right mental health partner matters. Here's why individuals and families trust us:", 'wellcrest' ); ?></p>
			</div>
			<div class="features-grid">
				<?php
				$whys = array(
					array( 'heart', 'Compassionate Care', 'We listen, we understand, and we meet you where you are.' ),
					array( 'video', 'Convenience First', 'With in-person, in-office and telehealth options, getting help fits into your life.' ),
					array( 'users', 'Trusted Professionals', 'Our licensed providers bring both clinical excellence and genuine care to every session.' ),
					array( 'shield', 'Personalized Support', 'Every journey is unique, and we design care plans that reflect your specific needs.' ),
					array( 'brain', 'Holistic Approach', 'We care for the whole person—mind, body, and spirit.' ),
					array( 'check', 'Confidential & Safe', 'Your privacy and comfort are always protected.' ),
				);
				foreach ( $whys as $why ) :
					?>
					<div class="feature-card">
						<div class="feature-icon"><?php wellcrest_icon_e( $why[0] ); ?></div>
						<h3><?php echo esc_html( $why[1] ); ?></h3>
						<p><?php echo esc_html( $why[2] ); ?></p>
					</div>
				<?php endforeach; ?>
			</div>
		</div>
	</section>

	<?php
	get_template_part(
		'template-parts/cta-banner',
		null,
		array(
			'title' => esc_html__( 'Convenient, confidential, compassionate care', 'wellcrest' ),
			'text'  => esc_html__( 'Reserve your appointment today and start your journey to better mental health.', 'wellcrest' ),
			'btn'   => esc_html__( 'Book Appointment', 'wellcrest' ),
			'use_calendly' => true,
		)
	);
	?>

</main>

<?php
get_footer();
