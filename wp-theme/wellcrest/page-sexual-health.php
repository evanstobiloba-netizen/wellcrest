<?php
/**
 * Template for sexual health landing page (page-sexual-health.php).
 *
 * @package WellCrest
 */

get_header();

get_template_part(
	'template-parts/page-hero',
	null,
	array(
		'title'    => get_the_title() ? get_the_title() : esc_html__( 'Sexual Health', 'wellcrest' ),
		'badge'    => esc_html__( 'Sexual Health', 'wellcrest' ),
		'subtitle' => esc_html__( 'Compassionate, comprehensive care for your sexual health and well-being.', 'wellcrest' ),
	)
);

$items = array(
	array( 'href' => 'assessment',        'icon' => 'stethoscope', 'title' => 'Sexual Assessment & Diagnosis', 'desc' => 'Thorough, compassionate evaluation to understand your concerns and reach an accurate diagnosis.' ),
	array( 'href' => 'individual-therapy', 'icon' => 'heart',       'title' => 'Individual Therapy', 'desc' => 'Safe, confidential support for the sexual concerns that affect your life.' ),
	array( 'href' => 'education',         'icon' => 'book',         'title' => 'Education & Psychoeducation', 'desc' => 'Evidence-based knowledge that normalizes, empowers, and heals.' ),
	array( 'href' => 'coordination',      'icon' => 'network',      'title' => 'Coordination of Care', 'desc' => 'Whole-person, integrated care connected around your goals.' ),
);
?>

<main class="site-main">
	<section class="py-16">
		<div class="container">
			<div class="sh-services-grid">
				<?php foreach ( $items as $item ) : ?>
					<a href="<?php echo esc_url( home_url( '/sexual-health/' . $item['href'] ) ); ?>" class="service-card">
						<div class="service-icon">
							<?php wellcrest_icon_e( $item['icon'] ); ?>
						</div>
						<h3 class="service-title"><?php echo esc_html( $item['title'] ); ?></h3>
						<p class="service-desc"><?php echo esc_html( $item['desc'] ); ?></p>
						<span class="service-link">
							<?php esc_html_e( 'Learn More', 'wellcrest' ); ?>
							<?php wellcrest_icon_e( 'arrow' ); ?>
						</span>
					</a>
				<?php endforeach; ?>
			</div>
		</div>
	</section>

	<?php
	get_template_part(
		'template-parts/cta-banner',
		null,
		array(
			'title' => esc_html__( 'Ready to Prioritize Your Sexual Health?', 'wellcrest' ),
			'text'  => esc_html__( 'Take the first step with a confidential, compassionate consultation.', 'wellcrest' ),
			'btn'   => esc_html__( 'Book Appointment', 'wellcrest' ),
			'use_calendly' => true,
		)
	);
	?>
</main>

<?php
get_footer();
