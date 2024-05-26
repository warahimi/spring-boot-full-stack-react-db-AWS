package com.wahid.ChallengeApp.controllers;

import com.wahid.ChallengeApp.models.Challenge;
import com.wahid.ChallengeApp.services.ChallangeService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/challenges")
@CrossOrigin(origins = "http://localhost:3000")
public class ChallengeController {

    ChallangeService challangeService;
    public ChallengeController(ChallangeService challangeService)
    {
        this.challangeService = challangeService;
    }



    @GetMapping
    public List<Challenge> getAllChallenges()
    {
        return challangeService.getAllChallenges();
    }

    @PostMapping
    public String addChallenge(@RequestBody Challenge challenge)
    {
        boolean isChallengeAdded = challangeService.addChallenge(challenge);
        if(isChallengeAdded)
        {
            return "Challenge successfully added";
        }
        else {
            return "Challenge not successfully added";
        }
    }

    @GetMapping("/{month}")
    public ResponseEntity<Challenge> getChallengeByMonth(@PathVariable String month)
    {
        Challenge result = challangeService.getChallengByMonth(month);
        if(result != null)
        {
            return new ResponseEntity<>(result, HttpStatus.OK);
        }
        else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<Challenge> updateChallenge(@PathVariable long id, @RequestBody Challenge newChallenge)
    {
        Challenge updatedChallenge = challangeService.updateChallenge(id,newChallenge);
        if(updatedChallenge != null)
        {
            return new ResponseEntity<>(updatedChallenge,HttpStatus.OK);
        }
        else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Challenge> deleteChallenge(@PathVariable long id)
    {
        Challenge deletedChallenge = challangeService.deleteChallenge(id);
        if(deletedChallenge != null)
        {
            return new ResponseEntity<>(deletedChallenge, HttpStatus.OK);
        }
        else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
}
