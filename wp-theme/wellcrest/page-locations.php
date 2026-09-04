<?php
/**
 * Template for locations page (page-locations.php).
 *
 * @package WellCrest
 */

get_header();

$locations = wellcrest_locations();

get_template_part(
	'template-parts/page-hero',
	null,
	array(
		'title'    => get_the_title() ? get_the_title() : esc_html__( 'Our Locations', 'wellcrest' ),
		'badge'    => esc_html__( 'Locations', 'wellcrest' ),
		'subtitle' => esc_html__( 'Quality mental health services available in Georgia, Arizona, and Maryland.', 'wellcrest' ),
	)
);
?>

<main class="site-main">

	<!-- Locations grid -->
	<section class="py-16">
		<div class="container">
			<div style="display:grid;gap:1.5rem;">
				<?php foreach ( $locations as $key => $loc ) : ?>
					<div class="feature-card" style="padding:1.5rem;">
						<div class="hero-feature-inner" style="margin-bottom:1rem;">
							<div class="service-icon">
								<?php wellcrest_icon_e( 'map-pin' ); ?>
							</div>
							<div>
								<h3 class="doctor-name" style="font-size:1.125rem;"><?php echo esc_html( $loc['name'] ); ?></h3>
								<p class="text-slate-500" style="font-size:0.75rem;"><?php echo esc_html( $loc['tagline'] ); ?></p>
							</div>
							<span class="location-badge <?php echo 'Main Office' === $loc['badge'] ? 'telehealth' : 'telehealth'; ?>" style="margin-left:auto;">
								<?php echo esc_html( $loc['badge'] ); ?>
							</span>
						</div>
						<p class="doctor-bio"><?php echo esc_html( $loc['desc'] ); ?></p>
						<div class="location-services">
							<?php foreach ( $loc['services'] as $service ) : ?>
								<div class="location-service">
									<?php
									if ( false !== strpos( $service, 'In-Person' ) || false !== strpos( $service, 'Telehealth' ) ) {
										wellcrest_icon_e( 'video' );
									} else {
										wellcrest_icon_e( 'check-circle', 'icon icon-sm text-emerald-500' );
									}
									?>
									<span><?php echo esc_html( $service ); ?></span>
									<span class="location-pill"><?php echo esc_html( $loc['name'] ); ?></span>
								</div>
							<?php endforeach; ?>
						</div>
						<a href="<?php echo esc_url( home_url( '/locations/' . $key ) ); ?>" class="service-link">
							<?php esc_html_e( 'View Details', 'wellcrest' ); ?>
							<?php wellcrest_icon_e( 'arrow' ); ?>
						</a>
					</div>
				<?php endforeach; ?>
			</div>
		</div>
	</section>

	<!-- Insurance accepted -->
	<section class="section bg-slate-50">
		<div class="container">
			<div class="section-header">
				<h2><?php esc_html_e( 'Insurance Accepted', 'wellcrest' ); ?></h2>
				<p class="section-subtitle"><?php esc_html_e( 'We accept most major insurance plans. Contact us to verify your coverage.', 'wellcrest' ); ?></p>
			</div>
			<?php get_template_part( 'template-parts/section-insurance' ); ?>
		</div>
	</section>

	<?php
	get_template_part(
		'template-parts/cta-banner',
		null,
		array(
			'title' => esc_html__( 'Ready to Book an Appointment?', 'wellcrest' ),
			'text'  => esc_html__( 'Schedule your visit today and start your journey to better health.', 'wellcrest' ),
			'btn'   => esc_html__( 'Book Appointment', 'wellcrest' ),
			'use_calendly' => true,
		)
	);
	?>

</main>

<?php
get_footer();
