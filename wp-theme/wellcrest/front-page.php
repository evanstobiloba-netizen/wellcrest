<?php
/**
 * Front page template (the home page).
 *
 * @package WellCrest
 */

get_header();

get_template_part( 'template-parts/section-hero' );
get_template_part( 'template-parts/section-insurance' );
get_template_part( 'template-parts/section-doctor' );
get_template_part( 'template-parts/section-services' );
get_template_part( 'template-parts/section-common-conditions' );
get_template_part( 'template-parts/section-locations' );
get_template_part( 'template-parts/section-why' );
get_template_part( 'template-parts/section-genesight' );
get_template_part( 'template-parts/section-newsletter' );

get_footer();
