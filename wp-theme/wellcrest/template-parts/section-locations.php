<?php
/**
 * Locations section (home page cards).
 *
 * @package WellCrest
 */

$locations = wellcrest_locations();
?>

<section class="section bg-slate-50" id="locations" aria-label="Locations">
	<div class="container">
		<div class="section-header">
			<span class="section-badge blue-border"><?php esc_html_e( 'Locations', 'wellcrest' ); ?></span>
			<h2><?php esc_html_e( 'Care Across States', 'wellcrest' ); ?></h2>
			<p class="section-subtitle"><?php esc_html_e( 'Access care in-person or through our secure telehealth platform serving Georgia, Arizona, and Maryland.', 'wellcrest' ); ?></p>
		</div>

		<div class="locations-grid">
			<?php foreach ( $locations as $key => $loc ) : ?>
				<div class="location-card">
					<div class="location-card-top">
						<div class="location-icon">
							<?php wellcrest_icon_e( 'map-pin' ); ?>
						</div>
						<span class="location-badge <?php echo 'Dual' === $loc['status'] ? 'dual' : 'telehealth'; ?>">
							<?php echo esc_html( $loc['status'] ); ?>
						</span>
					</div>

					<h4 class="location-city"><?php echo esc_html( $loc['name'] ); ?></h4>
					<p class="location-country"><?php esc_html_e( 'United States', 'wellcrest' ); ?></p>

					<div class="location-services">
						<?php if ( 'Dual' === $loc['status'] ) : ?>
							<div class="location-service">
								<?php wellcrest_icon_e( 'video' ); ?>
								<span><?php esc_html_e( 'Telehealth', 'wellcrest' ); ?></span>
							</div>
							<div class="location-service">
								<?php wellcrest_icon_e( 'brain' ); ?>
								<span><?php esc_html_e( 'In-Person', 'wellcrest' ); ?></span>
							</div>
						<?php else : ?>
							<div class="location-service">
								<?php wellcrest_icon_e( 'video' ); ?>
								<span><?php esc_html_e( 'Telehealth', 'wellcrest' ); ?></span>
							</div>
						<?php endif; ?>
					</div>

					<div class="location-foot">
						<div class="location-status <?php echo $loc['available'] ? '' : 'coming'; ?>">
							<?php wellcrest_icon_e( 'check-circle' ); ?>
							<span><?php echo $loc['available'] ? esc_html__( 'Available Now', 'wellcrest' ) : esc_html__( 'Coming Soon', 'wellcrest' ); ?></span>
						</div>
						<a href="<?php echo esc_url( home_url( '/locations/' . $key ) ); ?>" class="service-link">
							<?php wellcrest_icon_e( 'arrow' ); ?>
						</a>
					</div>
				</div>
			<?php endforeach; ?>
		</div>
	</div>
</section>
