<?php
/**
 * Common Conditions Treated section (mental + sexual health columns).
 *
 * Mirrors src/sections/CommonConditions.jsx in the React site.
 *
 * @package WellCrest
 */

$mental_groups = array(
	array(
		'title' => 'Depression',
		'href'  => '/services',
		'items' => array( 'Major depressive disorder', 'Persistent depressive disorder', 'Seasonal depression' ),
	),
	array(
		'title' => 'Anxiety disorders',
		'href'  => '/services',
		'items' => array( 'Generalized anxiety disorder (GAD)', 'Panic disorder', 'Social anxiety disorder' ),
	),
	array(
		'title' => 'Trauma-related disorders',
		'href'  => '/services',
		'items' => array( 'Post-traumatic stress disorder (PTSD)', 'Acute stress disorder' ),
	),
	array(
		'title' => 'Bipolar disorders',
		'href'  => '/services',
		'items' => array( 'Bipolar I disorder', 'Bipolar II disorder', 'Cyclothymic disorder' ),
	),
	array(
		'title' => 'Psychotic disorders',
		'href'  => '/services',
		'items' => array( 'Brief psychosis' ),
	),
	array(
		'title' => 'ADHD',
		'href'  => '/services',
		'items' => array( 'Attention-deficit/hyperactivity disorder' ),
	),
	array(
		'title' => 'Obsessive-compulsive & related disorders',
		'href'  => '/services',
		'items' => array( 'Obsessive-compulsive disorder (OCD)' ),
	),
	array(
		'title' => 'Sleep-related mental health concerns',
		'href'  => '/services',
		'items' => array( 'Insomnia & sleep problems associated with psychiatric conditions' ),
	),
);

$sexual_conditions = array(
	'Sexual concerns associated with depression and anxiety',
	'Changes in sexual functioning related to stress, medications, aging, or mental-health conditions',
	'Erectile dysfunction, premature or delayed ejaculation',
	'Orgasmic difficulties (anorgasmia, delayed orgasm)',
	'Painful intercourse (dyspareunia, vaginismus)',
	'Sexual anxiety, performance anxiety, or avoidance',
);

$mental_href = home_url( '/services' );
$sexual_href = home_url( '/sexual-health/individual-therapy' );
?>

<section class="section bg-slate-50" id="conditions" aria-label="Common Conditions Treated">
	<div class="container">
		<div class="section-header">
			<span class="section-badge"><?php esc_html_e( 'Common Conditions Treated', 'wellcrest' ); ?></span>
			<h2><?php esc_html_e( 'Compassionate Care for Mental & Sexual Health', 'wellcrest' ); ?></h2>
			<p class="section-subtitle"><?php esc_html_e( 'Evidence-based treatment for a wide range of conditions across both mental and sexual health.', 'wellcrest' ); ?></p>
		</div>

		<div class="doctor-grid" style="align-items:flex-start;">
			<!-- Mental Health -->
			<div class="feature-card" style="padding:2rem;">
				<div class="hero-feature-inner" style="margin-bottom:1.5rem;">
					<div class="service-icon"><?php wellcrest_icon_e( 'brain' ); ?></div>
					<div>
						<h3 class="doctor-name" style="font-size:1.25rem;"><?php esc_html_e( 'Mental Health', 'wellcrest' ); ?></h3>
						<p class="text-slate-500" style="font-size:0.875rem;"><?php esc_html_e( 'Conditions we treat', 'wellcrest' ); ?></p>
					</div>
				</div>

				<div style="display:flex;flex-direction:column;gap:1.25rem;margin-bottom:2rem;">
					<?php foreach ( $mental_groups as $group ) : ?>
						<div>
							<a href="<?php echo esc_url( home_url( $group['href'] ) ); ?>" class="service-link" style="font-weight:600;margin-bottom:0.5rem;">
								<?php echo esc_html( $group['title'] ); ?>
								<?php wellcrest_icon_e( 'arrow', 'icon icon-sm' ); ?>
							</a>
							<div style="display:flex;flex-wrap:wrap;gap:0.5rem;">
								<?php foreach ( $group['items'] as $item ) : ?>
									<span class="condition-chip"><?php echo esc_html( $item ); ?></span>
								<?php endforeach; ?>
							</div>
						</div>
					<?php endforeach; ?>
				</div>

				<a href="<?php echo esc_url( $mental_href ); ?>" class="service-link" style="font-weight:500;">
					<?php esc_html_e( 'View Mental Health Services', 'wellcrest' ); ?>
					<?php wellcrest_icon_e( 'arrow' ); ?>
				</a>
			</div>

			<!-- Sexual Health -->
			<div class="feature-card" style="padding:2rem;">
				<div class="hero-feature-inner" style="margin-bottom:1.5rem;">
					<div class="service-icon"><?php wellcrest_icon_e( 'heart' ); ?></div>
					<div>
						<h3 class="doctor-name" style="font-size:1.25rem;"><?php esc_html_e( 'Sexual Health', 'wellcrest' ); ?></h3>
						<p class="text-slate-500" style="font-size:0.875rem;"><?php esc_html_e( 'Concerns we help with', 'wellcrest' ); ?></p>
					</div>
				</div>

				<div style="display:flex;flex-direction:column;gap:0.75rem;margin-bottom:2rem;">
					<?php foreach ( $sexual_conditions as $item ) : ?>
						<a href="<?php echo esc_url( $sexual_href ); ?>" class="condition-row">
							<?php wellcrest_icon_e( 'check-circle', 'icon icon-sm text-emerald-500' ); ?>
							<span><?php echo esc_html( $item ); ?></span>
						</a>
					<?php endforeach; ?>
				</div>

				<a href="<?php echo esc_url( $sexual_href ); ?>" class="service-link" style="font-weight:500;">
					<?php esc_html_e( 'Explore Sexual Health Services', 'wellcrest' ); ?>
					<?php wellcrest_icon_e( 'arrow' ); ?>
				</a>
			</div>
		</div>
	</div>
</section>