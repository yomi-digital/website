<form method="post" enctype="multipart/form-data" class="form-horizontal form-bordered form-row-stripped" id="mod-<?php echo strtolower($datatype); ?>">
	<div class="portlet box blue">
		<div class="portlet-body form">
			<div class="form-body">
				<?php 	
					$max=count($custom_datatypes)/2;
					$i=1;				
					foreach ($custom_datatypes as $field){ 
						if($i==1){echo '<div class="col-sm-6 col-sm-offset-3">';}
						$instructions=returnFieldInstructions($field['Comment']);
						if($instructions['type']!='custom'){
							echo returnCorrectInputField($instructions['type'], $field['Field'], $instructions['required'], $instructions['specs'], $row_rs_single[$field['Field']],$instructions['multiple']);
						}else{
							echo $customFields[$field['Field']];
						}
						if($i<$max){$i++;}else{echo '</div>';$i=1;}
					} 
					if($i!=1){echo '</div>';}
				?>
			</div><!--form-body-->
		</div><!--portlet-body-->
	</div><!--portlet-->
	<input type="hidden" name="mod<?php echo strtolower($datatype); ?>" value="<?php echo $row_rs_single['id']; ?>">
</form>
