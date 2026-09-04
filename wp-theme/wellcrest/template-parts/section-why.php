<?php
/**
 * Why choose us section.
 *
 * @package WellCrest
 */

$features = wellcrest_why_features();
$stats    = wellcrest_why_stats();
?>

<section class="section bg-slate-50" id="why" aria-label="Why">
	<div class="container">
		<div class="section-header">
			<span class="section-badge"><?php esc_html_e( 'Why Choose Us', 'wellcrest' ); ?></span>
			<h2><?php esc_html_e( 'Wellness, Reimagined', 'wellcrest' ); ?></h2>
			<p class="section-subtitle"><?php esc_html_e( 'A modern approach to mental health and wellness that puts you at the center.', 'wellcrest' ); ?></p>
		</div>

		<div class="stats-grid">
			<?php foreach ( $stats as $stat ) : ?>
				<div class="stat">
					<?php wellcrest_icon_e( $stat['icon'] ); ?>
					<div class="stat-value"><?php echo esc_html( $stat['value'] ); ?></div>
					<div class="stat-label"><?php echo esc_html( $stat['label'] ); ?></div>
				</div>
			<?php endforeach; ?>
		</div>

		<div class="features-grid">
			<?php foreach ( $features as $feature ) : ?>
				<div class="feature-card">
					<div class="feature-icon">
						<?php wellcrest_icon_e( $feature['icon'] ); ?>
					</div>
					<h3><?php echo esc_html( $feature['title'] ); ?></h3>
					<p><?php echo esc_html( $feature['desc'] ); ?></p>
				</div>
			<?php endforeach; ?>
		</div>
	</div>
</section>
