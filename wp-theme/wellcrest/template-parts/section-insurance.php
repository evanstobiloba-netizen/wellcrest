<?php
/**
 * Insurance accepted marquee section.
 *
 * @package WellCrest
 */

$insurances = array(
	array( 'name' => 'Aetna', 'src' => 'aetna.svg' ),
	array( 'name' => 'Cigna', 'src' => 'cigna.svg' ),
	array( 'name' => 'Carelon', 'src' => 'carelon-behavioral-health.svg' ),
	array( 'name' => 'Optum (UnitedHealth Care)', 'src' => 'unitedhealthcare.svg' ),
	array( 'name' => 'Oscar', 'src' => 'oscar.svg' ),
	array( 'name' => 'Blue Cross Blue Shield', 'src' => 'blue-cross-blue-shield.svg' ),
	array( 'name' => 'Medicare', 'src' => 'medicare.svg' ),
	array( 'name' => 'GTEB' ),
	array( 'name' => 'Humana', 'src' => 'humana.svg' ),
	array( 'name' => 'Ambetter', 'src' => 'ambetter.png' ),
	array( 'name' => 'Cash (Self-Pay)' ),
	array( 'name' => 'Wellcare', 'src' => 'wellcare.png' ),
	array( 'name' => 'Care First', 'src' => 'carefirst.png' ),
	array( 'name' => 'Medicaid', 'src' => 'medicaid.png' ),
);

$logos_dir = WELLCREST_URI . '/assets/img/logos/';
$ng_logos  = get_template_directory() . '/assets/img/logos';
?>

<section class="insurance-section" aria-label="Insurance Accepted">
	<p class="insurance-title"><?php esc_html_e( 'Insurance Accepted', 'wellcrest' ); ?></p>

	<div class="marquee">
		<div class="marquee-track">
			<?php for ( $half = 0; $half < 2; $half++ ) : ?>
				<div class="marquee-half" <?php echo $half === 1 ? 'aria-hidden="true"' : ''; ?>>
					<?php foreach ( $insurances as $ins ) :
						$file = trailingslashit( $ng_logos ) . $ins['src'];
						?>
						<div class="insurance-logo">
							<?php if ( file_exists( $file ) ) : ?>
								<img src="<?php echo esc_url( $logos_dir . $ins['src'] ); ?>" alt="<?php echo esc_attr( $ins['name'] ); ?>" loading="lazy" />
							<?php else : ?>
								<span class="insurance-logo-text">
									<?php echo esc_html( $ins['name'] ); ?>
								</span>
							<?php endif; ?>
						</div>
					<?php endforeach; ?>
				</div>
			<?php endfor; ?>
		</div>
	</div>
</section>
