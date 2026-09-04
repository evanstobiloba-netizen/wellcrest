<?php
/**
 * Template Name: Sexual Health Detail
 *
 * Used by the Sexual Health sub-pages (assessment, individual-therapy,
 * education, coordination). Content is driven by the page slug.
 *
 * @package WellCrest
 */

get_header();

$slug   = get_post_field( 'post_name', get_the_ID() );
$pages  = wellcrest_sexual_health_pages();
$data   = isset( $pages[ $slug ] ) ? $pages[ $slug ] : null;

$about_title = $data ? $data['about_h'] : 'About';
$about       = $data ? $data['about'] : array();
$eval_title  = $data ? $data['eval_title'] : '';
$eval        = $data ? $data['eval'] : array();
$approach_title = $data ? $data['approach_title'] : '';
$approach    = $data ? $data['approach'] : array();
$info        = $data ? $data['info'] : array();
$cta_h       = $data ? $data['cta_h'] : '';
$cta_text    = $data ? $data['cta_text'] : '';
$cta_btn     = $data ? $data['cta_btn'] : 'Book Appointment';
$title       = $data ? $data['title'] : get_the_title();
$subtitle    = $data ? $data['subtitle'] : '';
$icon        = $data ? $data['icon'] : 'heart';
?>

<section class="page-section" style="background:linear-gradient(135deg, rgba(0,102,255,0.05), #fff 50%, rgba(42,183,166,0.05));padding-bottom:0;">
	<div class="container">
		<div class="page-hero-inner" style="text-align:left;max-width:100%;margin:0;padding:0;">
			<a href="<?php echo esc_url( home_url( '/sexual-health' ) ); ?>" class="service-link" style="margin-bottom:1.5rem;display:inline-flex;">
				<?php wellcrest_icon_e( 'arrow', 'icon icon-sm' ); ?>
				<?php esc_html_e( 'Sexual Health', 'wellcrest' ); ?>
			</a>
			<div style="display:flex;align-items:center;gap:1rem;margin-bottom:1rem;flex-wrap:wrap;">
				<div style="width:4rem;height:4rem;border-radius:1rem;background:linear-gradient(90deg,var(--brand),var(--brand-teal));display:flex;align-items:center;justify-content:center;flex-shrink:0;">
					<?php wellcrest_icon_e( $icon, 'icon' ); ?>
				</div>
				<div>
					<h1 style="font-size:2.25rem;"><?php echo esc_html( $title ); ?></h1>
					<p class="text-slate-500" style="margin-top:0.5rem;"><?php echo esc_html( $subtitle ); ?></p>
				</div>
			</div>
		</div>
	</div>
</section>

<main class="site-main">
	<section class="py-16">
		<div class="container">
			<div style="display:grid;grid-template-columns:1fr;gap:3rem;" class="sh-grid">
				<div style="grid-column:1;">
					<h2 class="doctor-name" style="font-size:1.5rem;margin-bottom:1.5rem;"><?php echo esc_html( $about_title ); ?></h2>
					<?php foreach ( $about as $paragraph ) : ?>
						<p class="doctor-bio" style="margin-bottom:1rem;"><?php echo esc_html( $paragraph ); ?></p>
					<?php endforeach; ?>

					<h3 class="doctor-name" style="font-size:1.25rem;margin:2rem 0 1rem;"><?php echo esc_html( $eval_title ); ?></h3>
					<div style="display:grid;grid-template-columns:1fr;gap:0.75rem;margin-bottom:2rem;">
						<?php foreach ( $eval as $item ) : ?>
							<div style="display:flex;align-items:flex-start;gap:0.75rem;padding:0.75rem;background:var(--slate-50);border-radius:0.5rem;">
								<?php wellcrest_icon_e( 'check-circle', 'icon icon-sm text-emerald-500' ); ?>
								<span class="text-slate-700" style="font-size:0.875rem;"><?php echo esc_html( $item ); ?></span>
							</div>
						<?php endforeach; ?>
					</div>

					<h3 class="doctor-name" style="font-size:1.25rem;margin:0 0 1rem;"><?php echo esc_html( $approach_title ); ?></h3>
					<div style="display:flex;flex-direction:column;gap:1rem;margin-bottom:2rem;">
						<?php foreach ( $approach as $a ) : ?>
							<div style="display:flex;align-items:flex-start;gap:1rem;padding:1rem;background:var(--slate-50);border-radius:0.75rem;">
								<div style="width:2.5rem;height:2.5rem;border-radius:0.5rem;background:var(--blue-100);display:flex;align-items:center;justify-content:center;flex-shrink:0;">
									<?php wellcrest_icon_e( $a['icon'], 'icon icon-sm' ); ?>
								</div>
								<div>
									<h4 style="font-weight:600;color:var(--slate-900);margin-bottom:0.25rem;"><?php echo esc_html( $a['title'] ); ?></h4>
									<p class="text-slate-600" style="font-size:0.875rem;"><?php echo esc_html( $a['desc'] ); ?></p>
								</div>
							</div>
						<?php endforeach; ?>
					</div>
				</div>

				<div style="grid-column:1;" class="sh-sidebar">
					<div style="background:var(--slate-50);border-radius:1rem;padding:1.5rem;position:sticky;top:8rem;">
						<h3 class="doctor-name" style="font-size:1.125rem;margin-bottom:1rem;"><?php esc_html_e( 'Quick Info', 'wellcrest' ); ?></h3>
						<div style="display:flex;flex-direction:column;gap:1rem;margin-bottom:1.5rem;">
							<?php foreach ( $info as $i ) : ?>
								<div style="display:flex;align-items:center;gap:0.75rem;">
									<?php wellcrest_icon_e( $i['icon'], 'icon icon-sm' ); ?>
									<div>
										<p style="font-size:0.875rem;font-weight:500;color:var(--slate-900);"><?php echo esc_html( $i['title'] ); ?></p>
										<p style="font-size:0.75rem;color:var(--slate-500);"><?php echo esc_html( $i['desc'] ); ?></p>
									</div>
								</div>
							<?php endforeach; ?>
						</div>
						<button type="button" class="btn-primary calendly-open" data-type="initial" style="width:100%;margin-bottom:0.75rem;">
							<?php esc_html_e( 'Book Appointment', 'wellcrest' ); ?>
						</button>
						<p style="font-size:0.75rem;color:var(--slate-400);text-align:center;"><?php esc_html_e( 'Telehealth available in GA, AZ & MD', 'wellcrest' ); ?></p>
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
			'title' => $cta_h,
			'text'  => $cta_text,
			'btn'   => $cta_btn,
			'use_calendly' => true,
		)
	);
	?>
</main>

<?php
get_footer();
