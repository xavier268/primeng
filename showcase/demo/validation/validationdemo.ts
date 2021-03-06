import {Component} from '@angular/core';
import {Validators,FormControl,FormGroup} from '@angular/forms';
import {Message,SelectItem} from '../../../components/common/api';

@Component({
    templateUrl: 'showcase/demo/validation/validationdemo.html'
})
export class ValidationDemo {
    
    msgs: Message[] = [];
    
    userform: FormGroup;
    
    submitted: boolean;
    
    genders: SelectItem[];
        
    description: string;
    
    ngOnInit() {
        this.userform = new FormGroup({
            'firstname': new FormControl('', Validators.required),
            'lastname': new FormControl('', Validators.required),
            'password': new FormControl('', [Validators.required, Validators.minLength(6)]),
            'description': new FormControl(''),
            'gender': new FormControl('', Validators.required)
        });
        
        this.genders = [];
        this.genders.push({label:'Select Gender', value:''});
        this.genders.push({label:'Male', value:'Male'});
        this.genders.push({label:'Female', value:'Female'});
    }
    
    onSubmit(value: string) {
        this.submitted = true;
        this.msgs = [];
        this.msgs.push({severity:'info', summary:'Success', detail:'Form Submitted'});
    }
    
    get diagnostic() { return JSON.stringify(this.userform.value); }
    
}