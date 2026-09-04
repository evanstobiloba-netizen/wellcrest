<?php
/**
 * CTA banner.
 *
 * @package WellCrest
 *
 * @var string $title   Banner title.
 * @var string $text    Supporting text (optional).
 * @var string $btn     Button label.
 * @var string $url     Button URL (defaults to contact).
 */

$title = isset( $args['title'] ) ? $args['title'] : esc_html__( 'Ready to Start Your Journey?', 'wellcrest' );
$text  = isset( $args['text'] ) ? $args['text'] : esc_html__( 'Schedule an appointment today and take the first step towards better mental health.', 'wellcrest' );
$btn   = isset( $args['btn'] ) ? $args['btn'] : esc_html__( 'Book an Appointment', 'wellcrest' );
$url   = isset( $args['url'] ) ? $args['url'] : home_url( '/contact' );
$use_calendly = isset( $args['use_calendly'] ) ? $args['use_calendly'] : false;
?>

<section class="cta-banner">
	<div class="container">
		<h2><?php echo esc_html( $title ); ?></h2>
		<p><?php echo esc_html( $text ); ?></p>
		<?php if ( $use_calendly ) : ?>
			<button type="button" class="btn-white calendly-open" data-type="initial">
				<?php echo esc_html( $btn ); ?>
				<?php wellcrest_icon_e( 'arrow' ); ?>
			</button>
		<?php else : ?>
			<a href="<?php echo esc_url( $url ); ?>" class="btn-white">
				<?php echo esc_html( $btn ); ?>
				<?php wellcrest_icon_e( 'arrow' ); ?>
			</a>
		<?php endif; ?>
	</div>
</section>
