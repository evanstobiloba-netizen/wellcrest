<?php
/**
 * Reusable page hero band (used by page.php and custom templates).
 *
 * @package WellCrest
 *
 * @var string $title    Page title (optional, falls back to post title).
 * @var string $badge    Badge text above the title (optional).
 * @var string $subtitle Supporting text (optional).
 * @var string $dark     'dark' class when true.
 */

$show_as_archive = isset( $args['is_archive'] ) && $args['is_archive'];

if ( isset( $args['title'] ) ) {
	$title = $args['title'];
} elseif ( is_archive() ) {
	$title = get_the_archive_title();
} else {
	$title = get_the_title();
}

$badge    = isset( $args['badge'] ) ? $args['badge'] : '';
$subtitle = isset( $args['subtitle'] ) ? $args['subtitle'] : '';
$dark     = ! empty( $args['dark'] ) ? ' page-hero-dark' : '';

// Prevent automatic archive page label styling.
$title = preg_replace( '/^<h1[^>]*>(.*?)<\/h1>/i', '$1', $title ); // phpcs:ignore -- safe replacement.
?>

<section class="page-hero<?php echo esc_attr( $dark ); ?>">
	<div class="page-hero-bg" aria-hidden="true">
		<div class="page-hero-blob-1"></div>
		<div class="page-hero-blob-2"></div>
	</div>
	<div class="page-hero-inner">
		<?php if ( $badge ) : ?>
			<span class="page-hero-badge"><?php echo esc_html( $badge ); ?></span>
		<?php endif; ?>
		<h1><?php echo wp_kses_post( $title ); ?></h1>
		<?php if ( $subtitle ) : ?>
			<p><?php echo esc_html( $subtitle ); ?></p>
		<?php endif; ?>
	</div>
</section>
