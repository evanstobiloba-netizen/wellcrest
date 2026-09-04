<?php
/**
 * Hero section for the front page.
 *
 * @package WellCrest
 */

$badge     = wellcrest_opt( 'hero_badge', 'YOUR HEALTH, OUR PRIORITY' );
$title     = wellcrest_opt( 'hero_title', 'Mental &amp; Sexual Health.' );
$subtitle  = wellcrest_opt( 'hero_subtitle', 'WellCrest Mental &amp; Sexual Health delivers compassionate, evidence-based care across mental health, sexual health, and wellness. In-person in Georgia. Telehealth across Georgia, Arizona, and Maryland.' );
$cta1      = wellcrest_opt( 'hero_cta_primary', 'Book Appointment' );
$cta2      = wellcrest_opt( 'hero_cta_secondary', 'About Us' );
$stats     = wellcrest_hero_stats();
?>

<section class="hero" id="home">
	<div class="hero-bg" aria-hidden="true">
		<div class="hero-blob-1"></div>
		<div class="hero-blob-2"></div>
		<div class="hero-blob-3"></div>
		<div class="hero-grid"></div>
	</div>

	<div class="container hero-inner">
		<div class="hero-left">
			<span class="hero-badge">
				<?php wellcrest_icon_e( 'zap' ); ?>
				<?php echo esc_html( $badge ); ?>
			</span>

			<h1><?php echo wp_kses_post( wpautop( $title ) ); ?></h1>

			<p class="hero-subtitle"><?php echo esc_html( $subtitle ); ?></p>

			<div class="hero-cta">
				<a href="<?php echo esc_url( home_url( '/contact' ) ); ?>" class="btn-primary">
					<?php echo esc_html( $cta1 ); ?>
					<?php wellcrest_icon_e( 'arrow' ); ?>
				</a>
				<a href="<?php echo esc_url( home_url( '/about' ) ); ?>" class="btn-secondary">
					<?php echo esc_html( $cta2 ); ?>
					<?php wellcrest_icon_e( 'arrow' ); ?>
				</a>
			</div>

			<div class="hero-stats">
				<?php foreach ( $stats as $stat ) : ?>
					<div class="hero-stat">
						<div class="hero-stat-icon">
							<?php wellcrest_icon_e( $stat['icon'] ); ?>
						</div>
						<div>
							<div class="hero-stat-value"><?php echo esc_html( $stat['value'] ); ?></div>
							<div class="hero-stat-label"><?php echo esc_html( $stat['label'] ); ?></div>
						</div>
					</div>
				<?php endforeach; ?>
			</div>
		</div>

		<div class="hero-right">
			<div class="hero-feature-grid">
				<div class="hero-feature">
					<div class="hero-feature-inner">
						<div class="hero-feature-icon">
							<?php wellcrest_icon_e( 'heart' ); ?>
						</div>
						<div>
							<h3><?php esc_html_e( 'Mental & Sexual Health', 'wellcrest' ); ?></h3>
							<p><?php esc_html_e( 'Personalized mental & sexual health care', 'wellcrest' ); ?></p>
						</div>
					</div>
				</div>
				<div class="hero-feature">
					<div class="hero-feature-inner">
						<div class="hero-feature-icon">
							<?php wellcrest_icon_e( 'video' ); ?>
						</div>
						<div>
							<h3><?php esc_html_e( 'In-Office & Telehealth', 'wellcrest' ); ?></h3>
							<p><?php esc_html_e( 'In-person care in Georgia and virtual visits across GA, AZ, MD', 'wellcrest' ); ?></p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>

	<div class="scroll-indicator" aria-hidden="true">
		<div class="scroll-mouse"><div class="scroll-dot"></div></div>
	</div>
</section>
