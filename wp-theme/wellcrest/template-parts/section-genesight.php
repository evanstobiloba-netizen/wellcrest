<?php
/**
 * Genesight section.
 *
 * @package WellCrest
 */

$image = get_theme_mod( 'wellcrest_genesight_image', 'https://images.unsplash.com/photo-1579154204601-01588f351e67?w=600&h=500&fit=crop' );
?>

<section class="genesight-section" id="genesight" aria-label="Genesight">
	<div class="genesight-blob-1"></div>
	<div class="genesight-blob-2"></div>

	<div class="container">
		<div class="genesight-grid">
			<div class="genesight">
				<span class="section-badge blue-border">
					<?php wellcrest_icon_e( 'dna' ); ?>
					<?php esc_html_e( 'Genesight', 'wellcrest' ); ?>
				</span>
				<h2><?php esc_html_e( 'Precision Mental & Wellness Support', 'wellcrest' ); ?></h2>
				<p><?php esc_html_e( 'Integrated insights, tailored to you. A premium, tech-forward approach to health decisions powered by genetic testing and data-driven insights.', 'wellcrest' ); ?></p>
				<div class="genesight-cta">
					<a href="<?php echo esc_url( home_url( '/services' ) ); ?>" class="btn-primary">
						<?php esc_html_e( 'Get Started', 'wellcrest' ); ?>
						<?php wellcrest_icon_e( 'arrow' ); ?>
					</a>
					<a href="<?php echo esc_url( home_url( '/about' ) ); ?>" class="btn-secondary">
						<?php esc_html_e( 'Learn More', 'wellcrest' ); ?>
					</a>
				</div>
			</div>

			<div>
				<img src="<?php echo esc_url( $image ); ?>" alt="Genesight genetic testing" loading="lazy" />
			</div>
		</div>
	</div>
</section>
