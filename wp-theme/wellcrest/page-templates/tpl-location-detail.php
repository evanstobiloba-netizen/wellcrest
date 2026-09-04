<?php
/**
 * Template Name: Location Detail
 *
 * Used by Georgia, Arizona, and Maryland location pages.
 * Content is driven by the page slug.
 *
 * @package WellCrest
 */

get_header();

$slug   = get_post_field( 'post_name', get_the_ID() );
$data   = wellcrest_location_details();
$loc    = isset( $data[ $slug ] ) ? $data[ $slug ] : reset( $data );

$days     = array( 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday' );
$hours    = array( '8:00 AM - 5:00 PM', '8:00 AM - 5:00 PM', '8:00 AM - 5:00 PM', '8:00 AM - 5:00 PM', '8:00 AM - 5:00 PM', 'By Appointment Only', 'Closed' );
?>

<section class="page-section" style="background:linear-gradient(135deg, rgba(0,102,255,0.05), #fff 50%, rgba(42,183,166,0.05));padding-bottom:0;">
	<div class="container" style="margin-bottom:1.5rem;">
		<a href="<?php echo esc_url( home_url( '/locations' ) ); ?>" class="service-link" style="margin-bottom:1.5rem;display:inline-flex;">
			<?php wellcrest_icon_e( 'arrow', 'icon icon-sm' ); ?>
			<?php esc_html_e( 'All Locations', 'wellcrest' ); ?>
		</a>
		<div style="display:flex;flex-wrap:wrap;align-items:center;gap:1rem;margin-bottom:1rem;">
			<h1 style="font-size:2.25rem;"><?php echo esc_html( $loc['name'] ); ?></h1>
			<span class="location-badge telehealth"><?php echo esc_html( $loc['tagline'] ); ?></span>
		</div>
		<p style="color:var(--slate-500);font-size:1.125rem;max-width:42rem;"><?php echo esc_html( $loc['description'] ); ?></p>
		<p style="color:var(--slate-400);font-size:0.875rem;margin-top:0.5rem;display:flex;align-items:center;gap:0.5rem;">
			<?php wellcrest_icon_e( 'check-circle', 'icon icon-sm text-emerald-500' ); ?>
			<?php echo esc_html( $loc['license'] ); ?>
		</p>
		<div style="display:flex;flex-wrap:wrap;gap:1rem;margin-top:1.5rem;">
			<button type="button" class="btn-primary calendly-open" data-type="initial"><?php esc_html_e( 'Book Appointment', 'wellcrest' ); ?></button>
			<?php if ( ! empty( $loc['mapUrl'] ) ) : ?>
				<a href="<?php echo esc_url( $loc['mapUrl'] ); ?>" target="_blank" rel="noopener noreferrer" class="btn-secondary" style="border-color:var(--slate-200);color:var(--slate-700);">
					<?php esc_html_e( 'View on Map', 'wellcrest' ); ?>
				</a>
			<?php endif; ?>
		</div>
	</div>
</section>

<main class="site-main">

	<!-- Quick info cards -->
	<section style="padding:3rem 0;background:var(--slate-50);">
		<div class="container">
			<div style="display:grid;grid-template-columns:1fr;gap:1.5rem;">
				<div style="background:#fff;border:1px solid var(--slate-100);border-radius:0.75rem;padding:1.5rem;box-shadow:var(--shadow-sm);">
					<div class="hero-feature-inner" style="margin-bottom:0.75rem;">
						<div class="hero-feature-icon"><?php wellcrest_icon_e( 'map-pin' ); ?></div>
						<h3 class="doctor-name" style="font-size:1rem;"><?php esc_html_e( 'Address', 'wellcrest' ); ?></h3>
					</div>
					<p class="text-slate-600"><?php echo esc_html( $loc['address'] ); ?></p>
					<?php if ( $loc['suite'] ) : ?>
						<p class="text-slate-400" style="font-size:0.875rem;margin-top:0.5rem;"><?php echo esc_html( $loc['suite'] ); ?></p>
					<?php endif; ?>
				</div>
				<div style="background:#fff;border:1px solid var(--slate-100);border-radius:0.75rem;padding:1.5rem;box-shadow:var(--shadow-sm);">
					<div class="hero-feature-inner" style="margin-bottom:0.75rem;">
						<div class="hero-feature-icon"><?php wellcrest_icon_e( 'phone' ); ?></div>
						<h3 class="doctor-name" style="font-size:1rem;"><?php esc_html_e( 'Contact', 'wellcrest' ); ?></h3>
					</div>
					<a href="tel:<?php echo esc_attr( preg_replace( '/[^0-9]/', '', $loc['phone'] ) ); ?>" class="service-link"><?php echo esc_html( $loc['phone'] ); ?></a>
					<p class="text-slate-400" style="font-size:0.875rem;margin-top:0.25rem;"><?php echo esc_html( 'Fax: ' . $loc['fax'] ); ?></p>
				</div>
				<div style="background:#fff;border:1px solid var(--slate-100);border-radius:0.75rem;padding:1.5rem;box-shadow:var(--shadow-sm);">
					<div class="hero-feature-inner" style="margin-bottom:0.75rem;">
						<div class="hero-feature-icon"><?php wellcrest_icon_e( 'mail' ); ?></div>
						<h3 class="doctor-name" style="font-size:1rem;"><?php esc_html_e( 'Email', 'wellcrest' ); ?></h3>
					</div>
					<a href="mailto:<?php echo esc_attr( $loc['email'] ); ?>" class="service-link"><?php echo esc_html( $loc['email'] ); ?></a>
					<p class="text-slate-400" style="font-size:0.875rem;margin-top:0.25rem;"><?php esc_html_e( 'Response within 24 hours', 'wellcrest' ); ?></p>
				</div>
			</div>
		</div>
	</section>

	<!-- Services & Features -->
	<section class="py-16">
		<div class="container">
			<div class="doctor-grid">
				<div>
					<h2 class="doctor-name" style="font-size:1.5rem;margin-bottom:1.5rem;"><?php esc_html_e( 'Services Available', 'wellcrest' ); ?></h2>
					<div style="display:flex;flex-direction:column;gap:0.75rem;">
						<?php foreach ( $loc['services'] as $service ) : ?>
							<div style="display:flex;align-items:center;gap:0.75rem;padding:1rem;background:var(--slate-50);border-radius:0.75rem;">
								<?php wellcrest_icon_e( 'check-circle', 'icon icon-sm text-emerald-500' ); ?>
								<span class="text-slate-700" style="flex:1;"><?php echo esc_html( $service ); ?></span>
								<span class="location-pill"><?php echo esc_html( $loc['name'] ); ?></span>
							</div>
						<?php endforeach; ?>
					</div>
				</div>
				<div>
					<h2 class="doctor-name" style="font-size:1.5rem;margin-bottom:1.5rem;"><?php esc_html_e( 'Location Features', 'wellcrest' ); ?></h2>
					<div style="display:flex;flex-direction:column;gap:0.75rem;">
						<?php foreach ( $loc['features'] as $feature ) : ?>
							<div style="display:flex;align-items:center;gap:0.75rem;padding:1rem;background:var(--slate-50);border-radius:0.75rem;">
								<?php wellcrest_icon_e( 'star', 'icon icon-sm' ); ?>
								<span class="text-slate-700"><?php echo esc_html( $feature ); ?></span>
							</div>
						<?php endforeach; ?>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- Hours + Getting started -->
	<section class="py-16" style="background:var(--slate-50);">
		<div class="container">
			<div class="doctor-grid">
				<div>
					<h2 class="doctor-name" style="font-size:1.5rem;margin-bottom:1.5rem;"><?php esc_html_e( 'Office Hours', 'wellcrest' ); ?></h2>
					<div style="display:flex;flex-direction:column;gap:0.75rem;">
						<?php foreach ( $days as $idx => $day ) : ?>
							<div style="display:flex;justify-content:space-between;align-items:center;padding:1rem;border-radius:0.75rem;background:#fff;">
								<span class="text-slate-700" style="font-weight:500;text-transform:capitalize;"><?php echo esc_html( $day ); ?></span>
								<span class="text-slate-500" style="font-size:0.875rem;"><?php echo esc_html( $hours[ $idx ] ); ?></span>
							</div>
						<?php endforeach; ?>
					</div>
				</div>

				<div>
					<div style="background:#fff;border:1px solid var(--slate-100);border-radius:1rem;padding:2rem;box-shadow:var(--shadow-sm);">
						<h3 class="doctor-name" style="font-size:1.25rem;margin-bottom:1rem;"><?php esc_html_e( 'How to Get Started', 'wellcrest' ); ?></h3>
						<div style="display:flex;flex-direction:column;gap:1rem;margin-bottom:1.5rem;">
							<div style="display:flex;gap:1rem;">
								<div style="width:2rem;height:2rem;background:rgba(0,102,255,0.1);border-radius:9999px;display:flex;align-items:center;justify-content:center;flex-shrink:0;"><span style="font-weight:700;color:var(--brand);">1</span></div>
								<div>
									<p style="font-weight:500;color:var(--slate-800);"><?php esc_html_e( 'Schedule Online', 'wellcrest' ); ?></p>
									<p class="text-slate-500" style="font-size:0.875rem;"><?php esc_html_e( 'Click "Book Appointment" to choose a time that works for you', 'wellcrest' ); ?></p>
								</div>
							</div>
							<div style="display:flex;gap:1rem;">
								<div style="width:2rem;height:2rem;background:rgba(0,102,255,0.1);border-radius:9999px;display:flex;align-items:center;justify-content:center;flex-shrink:0;"><span style="font-weight:700;color:var(--brand);">2</span></div>
								<div>
									<p style="font-weight:500;color:var(--slate-800);"><?php esc_html_e( 'Complete Intake', 'wellcrest' ); ?></p>
									<p class="text-slate-500" style="font-size:0.875rem;"><?php esc_html_e( 'Fill out your forms online before your visit', 'wellcrest' ); ?></p>
								</div>
							</div>
							<div style="display:flex;gap:1rem;">
								<div style="width:2rem;height:2rem;background:rgba(0,102,255,0.1);border-radius:9999px;display:flex;align-items:center;justify-content:center;flex-shrink:0;"><span style="font-weight:700;color:var(--brand);">3</span></div>
								<div>
									<p style="font-weight:500;color:var(--slate-800);"><?php esc_html_e( 'Meet Your Provider', 'wellcrest' ); ?></p>
									<p class="text-slate-500" style="font-size:0.875rem;"><?php esc_html_e( 'Join in-person or via video for your first appointment', 'wellcrest' ); ?></p>
								</div>
							</div>
						</div>
						<button type="button" class="btn-primary calendly-open" data-type="initial" style="width:100%;"><?php esc_html_e( 'Book Now', 'wellcrest' ); ?></button>
					</div>
				</div>
			</div>
		</div>
	</section>

	<?php
	get_template_part(
		'template-parts/cta-banner',
		null,
		array(
			'title' => esc_html__( 'Ready to Start Your Journey?', 'wellcrest' ),
			'text'  => esc_html__( 'Our compassionate team is here to support your mental health and wellness needs.', 'wellcrest' ),
			'btn'   => esc_html__( 'Book Appointment', 'wellcrest' ),
			'use_calendly' => true,
		)
	);
	?>
</main>

<?php
get_footer();
