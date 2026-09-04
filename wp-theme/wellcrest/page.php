<?php
/**
 * The template for displaying all single pages.
 *
 * @package WellCrest
 */

get_header();
?>

<?php
get_template_part(
	'template-parts/page-hero',
	null,
	array(
		'title'    => get_the_title(),
		'badge'    => esc_html__( 'About Us', 'wellcrest' ),
		'subtitle' => '',
	)
);
?>

<main class="site-main">
	<div class="container">
		<?php
		while ( have_posts() ) :
			the_post();
			?>
			<article id="post-<?php the_ID(); ?>" <?php post_class( 'entry-content' ); ?> style="padding:2rem 0;">
				<?php the_content(); ?>
			</article>
		<?php endwhile; ?>
	</div>
</main>

<?php
get_footer();
