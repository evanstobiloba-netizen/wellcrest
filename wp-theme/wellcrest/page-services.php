<?php
/**
 * Template for services page (page-services.php).
 *
 * @package WellCrest
 */

get_header();

get_template_part(
	'template-parts/page-hero',
	null,
	array(
		'title'    => get_the_title() ? get_the_title() : esc_html__( 'Our Services', 'wellcrest' ),
		'badge'    => esc_html__( 'Services', 'wellcrest' ),
		'subtitle' => esc_html__( 'Compassionate, convenient, and affordable mental and sexual health services across Georgia, Arizona, and Maryland.', 'wellcrest' ),
	)
);
?>

<main class="site-main">

	<!-- Service categories -->
	<section class="py-16">
		<div class="container">
			<div style="display:grid;grid-template-columns:1fr;gap:2rem;">
				<a href="<?php echo esc_url( home_url( '/services/mental-health' ) ); ?>" class="feature-card" style="display:block;padding:2rem;">
					<div class="hero-feature-inner" style="margin-bottom:1rem;">
						<div class="service-icon">
							<?php wellcrest_icon_e( 'brain' ); ?>
						</div>
						<div>
							<h3 class="doctor-name" style="font-size:1.25rem;"><?php esc_html_e( 'Mental Health Services', 'wellcrest' ); ?></h3>
							<p class="text-slate-500" style="font-size:0.875rem;"><?php esc_html_e( '7 services', 'wellcrest' ); ?></p>
						</div>
					</div>
					<p class="doctor-bio"><?php esc_html_e( 'Comprehensive mental health care including depression, anxiety, bipolar disorder, PTSD, ADHD, insomnia, and stress management.', 'wellcrest' ); ?></p>
					<span class="service-link">
						<?php esc_html_e( 'View Services', 'wellcrest' ); ?>
						<?php wellcrest_icon_e( 'arrow' ); ?>
					</span>
				</a>

				<a href="<?php echo esc_url( home_url( '/sexual-health/assessment' ) ); ?>" class="feature-card" style="display:block;padding:2rem;">
					<div class="hero-feature-inner" style="margin-bottom:1rem;">
						<div class="service-icon">
							<?php wellcrest_icon_e( 'heart' ); ?>
						</div>
						<div>
							<h3 class="doctor-name" style="font-size:1.25rem;"><?php esc_html_e( 'Sexual Health Services', 'wellcrest' ); ?></h3>
							<p class="text-slate-500" style="font-size:0.875rem;"><?php esc_html_e( '4 services', 'wellcrest' ); ?></p>
						</div>
						<span class="service-ribbon" style="margin-left:auto;"><span class="service-ribbon-dot"></span><?php esc_html_e( 'New', 'wellcrest' ); ?></span>
					</div>
					<p class="doctor-bio"><?php esc_html_e( 'Confidential, compassionate care for sexual health concerns including assessment & diagnosis, individual therapy, education, and coordination of care.', 'wellcrest' ); ?></p>
					<span class="service-link">
						<?php esc_html_e( 'View Services', 'wellcrest' ); ?>
						<?php wellcrest_icon_e( 'arrow' ); ?>
					</span>
				</a>
			</div>
		</div>
	</section>

	<?php
	get_template_part( 'template-parts/section-common-conditions' );
	?>

	<!-- Why choose us -->
	<section class="section bg-slate-50">
		<div class="container">
			<div class="section-header">
				<h2><?php esc_html_e( 'Why Choose WellCrest Health', 'wellcrest' ); ?></h2>
				<p class="section-subtitle"><?php esc_html_e( 'Choosing the right mental health partner matters.', 'wellcrest' ); ?></p>
			</div>
			<div class="features-grid">
				<?php
				$whys = array(
					array( 'Compassionate Care', 'We listen, we understand, and we meet you where you are.' ),
					array( 'Convenience First', 'With in-person, in-office and telehealth options, getting help fits into your life.' ),
					array( 'Trusted Professionals', 'Our licensed providers bring both clinical excellence and genuine care.' ),
					array( 'Personalized Support', 'Every journey is unique, and we design care plans that reflect your needs.' ),
					array( 'Holistic Approach', 'We care for the whole person—mind, body, and spirit.' ),
					array( 'Confidential & Safe', 'Your privacy and comfort are always protected.' ),
				);
				foreach ( $whys as $why ) :
					?>
					<div class="feature-card">
						<h3 style="font-size:1.125rem;"><?php echo esc_html( $why[0] ); ?></h3>
						<p><?php echo esc_html( $why[1] ); ?></p>
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
			'title' => esc_html__( 'Ready to Start Your Journey?', 'wellcrest' ),
			'text'  => esc_html__( 'Schedule an appointment today and take the first step towards better mental health.', 'wellcrest' ),
			'btn'   => esc_html__( 'Book Appointment', 'wellcrest' ),
			'use_calendly' => true,
		)
	);
	?>

</main>

<?php
get_footer();
