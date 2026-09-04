<?php
/**
 * Services section (home page cards).
 *
 * @package WellCrest
 */

$services = wellcrest_services();
?>

<section class="section" id="services" aria-label="Services">
	<div class="container">
		<div class="section-header">
			<span class="section-badge">
				<?php wellcrest_icon_e( 'zap' ); ?>
				<?php esc_html_e( 'Our Services', 'wellcrest' ); ?>
			</span>
			<h2><?php esc_html_e( 'Comprehensive Care', 'wellcrest' ); ?></h2>
			<p class="section-subtitle"><?php esc_html_e( 'Expert services tailored to your health needs.', 'wellcrest' ); ?></p>
		</div>

		<div class="services-grid">
			<?php foreach ( $services as $service ) : ?>
				<a href="<?php echo esc_url( home_url( ! empty( $service['href'] ) ? $service['href'] : '/services' ) ); ?>" class="service-card">
					<?php if ( ! empty( $service['new'] ) ) : ?>
						<span class="service-ribbon"><span class="service-ribbon-dot"></span>New</span>
					<?php endif; ?>
					<div class="service-icon">
						<?php wellcrest_icon_e( $service['icon'] ); ?>
					</div>
					<h3 class="service-title"><?php echo esc_html( $service['title'] ); ?></h3>
					<p class="service-desc"><?php echo esc_html( $service['short'] ); ?></p>
					<span class="service-link">
						<?php esc_html_e( 'Learn More', 'wellcrest' ); ?>
						<?php wellcrest_icon_e( 'arrow' ); ?>
					</span>
				</a>
			<?php endforeach; ?>
		</div>
	</div>
</section>
