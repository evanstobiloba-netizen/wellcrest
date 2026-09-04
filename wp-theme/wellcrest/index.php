<?php
/**
 * The main template file - fallback for any query not matched by another template.
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
		<h1><?php echo is_home() ? esc_html__( 'Articles', 'wellcrest' ) : get_the_archive_title(); ?></h1>
		<p><?php echo is_home() ? esc_html__( 'Stay informed with the latest insights on mental health, wellness, and evidence-based treatment approaches.', 'wellcrest' ) : ''; ?></p>
	</div>
</div>

<main class="site-main">
	<div class="container py-16">
		<?php if ( have_posts() ) : ?>

			<div class="articles-grid">
				<?php
				while ( have_posts() ) :
					the_post();
					?>
					<article <?php post_class( 'article-card' ); ?>>
						<a href="<?php the_permalink(); ?>" class="article-thumb">
							<?php if ( has_post_thumbnail() ) : ?>
								<?php the_post_thumbnail( 'wellcrest-card' ); ?>
							<?php else : ?>
								<div class="article-thumb-placeholder">
									<?php wellcrest_icon_e( 'brain' ); ?>
								</div>
							<?php endif; ?>
						</a>
						<div class="article-body">
							<div class="article-meta">
								<span class="article-cat">
									<?php wellcrest_icon_e( 'zap' ); ?>
									<?php
									$cats = get_the_category();
									if ( ! empty( $cats ) ) {
										echo esc_html( $cats[0]->name );
									} else {
										esc_html_e( 'General', 'wellcrest' );
									}
									?>
								</span>
								<span class="article-dot">&bull;</span>
								<span class="article-readtime"><?php echo esc_html( wellcrest_read_time() ); ?></span>
							</div>
							<h2><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h2>
							<p class="article-excerpt"><?php echo esc_html( get_the_excerpt() ); ?></p>
							<div class="article-foot">
								<span class="article-date"><?php echo esc_html( get_the_date() ); ?></span>
								<a href="<?php the_permalink(); ?>" class="article-readmore">
									<?php esc_html_e( 'Read more', 'wellcrest' ); ?>
									<?php wellcrest_icon_e( 'arrow' ); ?>
								</a>
							</div>
						</div>
					</article>
				<?php endwhile; ?>
			</div>

			<nav class="pagination">
				<?php
				echo paginate_links(
					array(
						'prev_text' => '&laquo;',
						'next_text' => '&raquo;',
					)
				);
				?>
			</nav>

		<?php else : ?>
			<p><?php esc_html_e( 'No posts found.', 'wellcrest' ); ?></p>
		<?php endif; ?>
	</div>
</main>

<?php
get_footer();
