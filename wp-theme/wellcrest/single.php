<?php
/**
 * The template for displaying all single posts.
 *
 * @package WellCrest
 */

get_header();
?>

<div class="page-hero">
	<div class="page-hero-bg" aria-hidden="true">
		<div class="page-hero-blob-1"></div>
		<div class="page-hero-blob-2"></div>
	</div>
	<div class="page-hero-inner">
		<h1><?php the_title(); ?></h1>
	</div>
</div>

<main class="site-main">
	<div class="container single-post-wrap">
		<?php
		while ( have_posts() ) :
			the_post();
			?>
			<article id="post-<?php the_ID(); ?>" <?php post_class( 'post-content' ); ?>>
				<header class="post-header">
					<div class="single-meta">
						<span><?php echo esc_html( get_the_date() ); ?></span>
						<span>&bull;</span>
						<span><?php echo esc_html( wellcrest_read_time() ); ?></span>
					</div>
				</header>

				<?php if ( has_post_thumbnail() ) : ?>
					<div class="post-thumb">
						<?php the_post_thumbnail( 'full' ); ?>
					</div>
				<?php endif; ?>

				<div class="wp-post-content entry-content">
					<?php
					the_content();

					wp_link_pages(
						array(
							'before' => '<div class="page-links">' . esc_html__( 'Pages:', 'wellcrest' ),
							'after'  => '</div>',
						)
					);
					?>
				</div>
			</article>
		<?php endwhile; ?>
	</div>
</main>

<?php
get_footer();
